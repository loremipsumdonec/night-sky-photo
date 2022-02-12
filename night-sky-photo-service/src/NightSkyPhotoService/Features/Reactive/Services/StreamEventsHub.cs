using Microsoft.AspNetCore.SignalR;

namespace NightSkyPhotoService.Features.Reactive.Services
{
    public class StreamEventsHub
        : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
