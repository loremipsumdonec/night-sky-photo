using Boilerplate.Features.Core;
using Boilerplate.Features.Core.Queries;
using PhotoGalleryService.Features.Gallery.Models;

namespace PhotoGalleryService.Features.Gallery.Queries
{
    public class GetImages
        : Query
    {
        public GetImages(int offset, int fetch)
        {
            Offset = offset;
            Fetch = fetch;
        }

        public int Offset { get; set; }

        public int Fetch { get; set; }

        public bool? IsDeleted { get; set; } = false;
    }

    public class GetImagesModel
        : IModel
    {
        public int Offset { get; set; }

        public int Fetch { get; set; }

        public List<Image> Images { get; set; } = new();
    }
}
