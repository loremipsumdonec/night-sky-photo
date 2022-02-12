
using Boilerplate.Features.MassTransit;
using Boilerplate.Features.Reactive.Events;

namespace RemotePhotographer.Features.Photographer.Events;

public class CaptureTargetChanged
    : Event, IConsumed
{
    public CaptureTargetChanged()
    {
    }

    public CaptureTargetChanged(string value)
    {
        Value = value;
    }

    public string Value { get; set; }
}