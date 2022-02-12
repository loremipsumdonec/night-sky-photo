using Boilerplate.Features.Reactive.Events;
using Boilerplate.Features.Reactive.Services;
using Microsoft.AspNetCore.SignalR;
using NightSkyPhotoService.Features.SignalR.Hubs;

namespace NightSkyPhotoService.Features.SignalR
{
    public class SignalREventHub
        : IEventHub
    {
        private readonly IEventHub _decorated;
        private readonly IHubContext<StreamEventsHub> _hubContext;

        public SignalREventHub(
            IEventHub decorated,
            IHubContext<StreamEventsHub> hubContext
        )
        {
            _decorated = decorated;
            _hubContext = hubContext;
        }

        public bool IsOpen => _decorated.IsOpen;

        public void Close()
        {
            _decorated.Close();
        }

        public void Connect(Action<IObservable<IEvent>> connect)
        {
            _decorated.Connect(connect);
        }

        public void Connect(Func<IObservable<IEvent>, IDisposable> connect)
        {
            _decorated.Connect(connect);
        }

        public void Dispatch(IEvent @event)
        {
            Send(@event);
            _decorated.Dispatch(@event);
        }

        public void Open()
        {
            _decorated.Open();
        }

        private void Send(IEvent @event)
        {
            _hubContext.Clients.All.SendAsync("ReceiveMessage", @event, @event.GetType().Name, DateTime.Now.ToString("yyyy-MM-dd HH\\:mm\\:ss"))
                .GetAwaiter()
                .GetResult();
        }
    }
}
