import { Capture as Component } from "./Capture";
import { useCamera } from "features/photographer/state/camera";

export const Capture: React.FC = () => {

    const [, { captureImage }] = useCamera();

    return (
        <Component onCapture={captureImage} />
    )
}