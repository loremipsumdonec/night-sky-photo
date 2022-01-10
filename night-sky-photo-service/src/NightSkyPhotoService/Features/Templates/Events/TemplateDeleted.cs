using NightSkyPhotoService.Features.Templates.Models;
using Boilerplate.Features.Reactive.Events;

namespace NightSkyPhotoService.Features.Templates.Events
{
    public class TemplateDeleted
        : Template, IEvent
    {
        public TemplateDeleted(Template source)
            : base(source)
        {
        }
    }
}
