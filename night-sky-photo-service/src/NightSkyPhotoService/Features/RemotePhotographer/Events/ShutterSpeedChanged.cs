
using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class ShutterSpeedChanged
    : Event, IConsumed
{
    public ShutterSpeedChanged()
    {
    }

    public ShutterSpeedChanged(string value)
    {
        Value = value;
    }

    public string Value { get; set; }
}