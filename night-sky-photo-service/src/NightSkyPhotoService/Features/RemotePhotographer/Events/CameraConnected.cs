
using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class CameraConnected
    : Event, IConsumed
{
    public CameraConnected()
    {
    }
}