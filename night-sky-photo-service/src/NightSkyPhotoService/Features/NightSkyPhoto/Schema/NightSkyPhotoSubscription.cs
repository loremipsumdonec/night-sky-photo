using PhotoGalleryService.Features.Gallery.Events;
using RemotePhotographer.Features.Photographer.Events;

namespace NightSkyPhotoService.Features.NightSkyPhoto.Schema 
{
    public class NightSkyPhotoSubscription
    {
        [Subscribe]
        public ImageCreated OnImageCreated([EventMessage] ImageCreated @event) => @event;

        [Subscribe]
        public CameraConnected OnCameraConnected([EventMessage] CameraConnected @event) => @event;

        [Subscribe]
        public CameraDisconnected OnCameraDisconnected([EventMessage] CameraDisconnected @event) => @event;

        [Subscribe]
        public ImageCaptured OnImageCaptured([EventMessage] ImageCaptured @event) => @event;

        [Subscribe]
        public PreviewImageCaptured OnPreviewImageCaptured([EventMessage] PreviewImageCaptured @event) => @event;

        [Subscribe]
        public ApertureChanged OnApertureChanged([EventMessage] ApertureChanged @event) => @event;

        [Subscribe]
        public ShutterSpeedChanged OnShutterSpeedChanged([EventMessage] ShutterSpeedChanged @event) => @event;

        [Subscribe]
        public CaptureTargetChanged OnCaptureTargetChanged([EventMessage] CaptureTargetChanged @event) => @event;

        [Subscribe]
        public ImageFormatChanged OnImageFormatChanged([EventMessage] ImageFormatChanged @event) => @event;

        [Subscribe]
        public ISOChanged OnISOChanged([EventMessage] ISOChanged @event) => @event;
    }
}