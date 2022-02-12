import { Preview as Component } from "./Preview";

import { useEffect, useState } from "react";
import { useEventStreamContext } from "features/events/state/eventStream";
import { filter } from 'rxjs/operators';
import { useCamera } from "features/photographer/state/camera";

export const Preview: React.FC = () => {

    const [, { startPreview, stopPreview }] = useCamera();
    const [ image, setImage ] = useState<any>(null);
    const { subject } = useEventStreamContext();

    useEffect(() => {

        const subscription = subject.pipe(
            filter(ev => ev.type === 'PreviewImageCaptured' && (ev as any).tags?.indexOf('preview') > -1)
          ).subscribe(ev => {
            setImage((ev as any).data)
          });

          return () => subscription.unsubscribe();

    }, [subject])

    return (
        <Component data={image} onStartPreview={startPreview} onStopPreview={stopPreview} />
    )
}