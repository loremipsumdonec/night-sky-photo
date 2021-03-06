
using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class ImageFormatChanged
    : Event, IConsumed
{
    public ImageFormatChanged()
    {
    }

    public ImageFormatChanged(string value)
    {
        Value = value;
    }

    public string Value { get; set; }
}