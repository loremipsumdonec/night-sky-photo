using NightSkyPhotoService.Features.Templates.Models;
using Boilerplate.Features.Reactive.Events;

namespace NightSkyPhotoService.Features.Templates.Events
{
    public class TemplateUpdated
        : Template, IEvent
    {
        public TemplateUpdated(Template source)
            : base(source)
        {
        }
    }
}
