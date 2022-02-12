using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using NightSkyPhotoService.Features.Reactive.Services;

namespace NightSkyPhotoService.Features.Reactive.Controllers
{
    [Route("/send"), ApiController]
    public class SendMessageController
        : ControllerBase
    {
        private readonly IHubContext<StreamEventsHub> _hubContext;
        private readonly StreamEventsHub _hub;

        public SendMessageController(IHubContext<StreamEventsHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpGet, Route("message")]
        public async Task<object> Send([FromQuery] string message)
        {
            await _hubContext.Clients.All.SendAsync("ReceiveMessage", message);

            return Ok(message);
        }
    }
}
