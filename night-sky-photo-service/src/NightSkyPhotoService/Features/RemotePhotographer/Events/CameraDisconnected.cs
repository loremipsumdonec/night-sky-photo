
using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class CameraDisconnected
    : Event, IConsumed
{
    public CameraDisconnected()
    {
    }
}