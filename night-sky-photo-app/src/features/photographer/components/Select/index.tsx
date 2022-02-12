import { useCameras } from "features/photographer/state/camera";
import { Select as Component } from "./Select";

export const Select: React.FC = () => {

    const [ { cameras }, { connect }] = useCameras();

    return (
        <Component cameras={cameras} onCameraSelected={connect} />
    )
}