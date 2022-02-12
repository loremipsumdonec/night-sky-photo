FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080  

COPY _out /app
COPY _frontend /app/wwwroot

WORKDIR /app
ENTRYPOINT ["dotnet", "NightSkyPhotoService.dll"]