using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;
using MassTransit;

namespace RemotePhotographer.Features.Photographer.Events;

public class PreviewImageCaptured
    : Event, IConsumed
{
    public PreviewImageCaptured()
    {
    }

    public MessageData<byte[]> Data { get; set; }

    public IEnumerable<string> Tags { get; set; }
}