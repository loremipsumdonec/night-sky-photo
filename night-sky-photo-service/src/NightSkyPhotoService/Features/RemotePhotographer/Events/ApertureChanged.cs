using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class ApertureChanged
    : Event, IConsumed
{
    public ApertureChanged()
    {
    }

    public ApertureChanged(string value)
    {
        Value = value;
    }

    public string Value { get; set; }
}