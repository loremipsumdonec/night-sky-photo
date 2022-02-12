using PhotoGalleryService.Features.Gallery.Models;
using Boilerplate.Features.Reactive.Events;
using Boilerplate.Features.MassTransit;

namespace PhotoGalleryService.Features.Gallery.Events
{
    public class ImageCreated
        : Image, IEvent, IConsumed
    {
        public ImageCreated() 
        {
        }
    }
}
