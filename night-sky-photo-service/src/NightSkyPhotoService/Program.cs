using NightSkyPhotoService.Features.Templates;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Boilerplate.Features.Core;
using Boilerplate.Features.Mapper;
using Boilerplate.Features.MassTransit.Services;
using Boilerplate.Features.Reactive.Reactive;
using MassTransit;
using System.Reflection;
using RemotePhotographer.Features.Photographer.Events;
using MassTransit.MongoDbIntegration.MessageData;
using Boilerplate.Features.MassTransit;
using PhotoGalleryService.Features.Gallery.Events;
using NightSkyPhotoService.Features.SignalR.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

builder.Host.ConfigureContainer((ContainerBuilder containerBuilder) =>
{
    List<Assembly> assemblies = new List<Assembly>();
    assemblies.Add(Assembly.Load(new AssemblyName("NightSkyPhotoService")));
    assemblies.Add(Assembly.Load(new AssemblyName("Boilerplate")));

    containerBuilder.RegisterModule(new CoreModule(builder.Configuration, assemblies));
    containerBuilder.RegisterModule(new MapperModule(builder.Configuration, assemblies));
    containerBuilder.RegisterModule(new ReactiveModule(builder.Configuration, assemblies));
    containerBuilder.RegisterModule(new MassTransitModule(builder.Configuration, assemblies));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("DefaultPolicy", builder =>
    {
        builder.AllowAnyHeader()
                .WithMethods("GET", "POST")
                .WithOrigins("http://localhost:3000")
                .AllowCredentials();
    });
});
builder.Services.AddSignalR();
builder.Services.AddControllers();

builder.Services.AddHttpClient("PhotoGalleryService", c => c.BaseAddress = new Uri("http://photo-gallery-service:8080/graphql/"));

var graphqlServer = builder.Services.AddGraphQLServer()
    .ModifyRequestOptions(opt => opt.IncludeExceptionDetails = true);

foreach(var entry in builder.Configuration.GetSection("graphql.remote.schemas").GetChildren()) {

    builder.Services.AddHttpClient(
        entry.GetValue<string>("name"), 
        c => c.BaseAddress = new Uri(entry.GetValue<string>("url"))
    );

    graphqlServer.AddRemoteSchema(entry.GetValue<string>("name"));
}

builder.Services.AddMassTransit(x =>
{
    x.AddConsumer<EventConsumer<ApertureChanged>>();
    x.AddConsumer<EventConsumer<CameraConnected>>();
    x.AddConsumer<EventConsumer<CameraDisconnected>>();
    x.AddConsumer<EventConsumer<CaptureTargetChanged>>();
    x.AddConsumer<EventConsumer<ImageCaptured>>();
    x.AddConsumer<EventConsumer<ImageFormatChanged>>();
    x.AddConsumer<EventConsumer<ISOChanged>>();
    x.AddConsumer<EventConsumer<PreviewImageCaptured>>();
    x.AddConsumer<EventConsumer<VideoImageCaptured>>();
    x.AddConsumer<EventConsumer<ShutterSpeedChanged>>();
    x.AddConsumer<EventConsumer<ImageCreated>>();

    x.UsingRabbitMq((context, configuration) =>
    {
        configuration.UseJsonSerializer();

        configuration.UseMessageData(
            new MongoDbMessageDataRepository(
                builder.Configuration.GetValue<string>("message.broker-service:parameters:data.repository.connectionString"),
                builder.Configuration.GetValue<string>("message.broker-service:parameters:data.repository.database")
            )
        );

        configuration.UseTimeout(c => c.Timeout = TimeSpan.FromSeconds(120));
        configuration.Host(
            builder.Configuration.GetValue<string>("message.broker-service:parameters:host"),
            builder.Configuration.GetValue<ushort>("message.broker-service:parameters:port"),
             "/", h =>
             {
                 h.Username(builder.Configuration.GetValue<string>("message.broker-service:parameters:username"));
                 h.Password(builder.Configuration.GetValue<string>("message.broker-service:parameters:password"));
             });

        configuration.ReceiveEndpoint(builder.Configuration.GetValue<string>("message.broker-service:parameters:receive.endpoint"), e =>
        {
            e.AutoDelete = true;
            e.PurgeOnStartup = true;
            e.ConfigureConsumers(context);
        });
    });

}).AddMassTransitHostedService();

builder.Services.AddGenericRequestClient();

var app = builder.Build();
app.UseRouting();
app.UseCors("DefaultPolicy");
app.UseStaticFiles();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
    endpoints.MapControllers();
});

app.MapHub<StreamEventsHub>("/events/stream");

app.Run();

public partial class Program { }