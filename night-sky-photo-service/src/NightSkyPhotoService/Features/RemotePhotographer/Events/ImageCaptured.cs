using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class ImageCaptured
    : Event, IConsumed
{
    public ImageCaptured()
    {
    }

    public string Path { get; set; }

    public IEnumerable<string> Tags { get; set; }
}