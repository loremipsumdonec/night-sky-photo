using Boilerplate.Features.Core.Queries;

namespace PhotoGalleryService.Features.Gallery.Queries
{
    public class GetImage
        : Query
    {
        public GetImage(string imageId)
        {
            ImageId = imageId;
        }

        public string ImageId { get; set; }
    }
}
