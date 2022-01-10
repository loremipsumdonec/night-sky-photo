using NightSkyPhotoService.Features.Templates.Models;
using Boilerplate.Features.Reactive.Events;

namespace NightSkyPhotoService.Features.Templates.Events
{
    public class TemplateCreated
        : Template, IEvent
    {
        public TemplateCreated(Template source)
            : base(source)
        {
        }
    }
}
