import { Settings as Component } from "./Settings";
import { useCamera } from "features/photographer/state/camera";

export const Settings: React.FC = () => {

    const [ { camera } ] = useCamera();

    if(camera) {
        return (
            <Component { ...camera} />
        )
    }

    return null;
}