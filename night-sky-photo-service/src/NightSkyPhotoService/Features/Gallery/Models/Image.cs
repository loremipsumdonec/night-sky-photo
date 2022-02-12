using Boilerplate.Features.Core;

namespace PhotoGalleryService.Features.Gallery.Models
{
    public class Image
        : IModel
    {
        public Image() 
        {
        }

        public string ImageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> Tags { get; set; } = new List<string>();

        public bool IsDeleted { get; set; }

        public DateTime Created { get; set; }

        public DateTime Updated { get; set; }

        public DateTime Deleted { get; set; }
    }
}
