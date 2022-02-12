import { useISOS } from "features/photographer/state/camera";
import { SelectISO as Component } from "./SelectISO";

export const SelectISO: React.FC = () => {

    const [ { isos }, { setISO }] = useISOS();

    if(isos) 
    {
        return (
            <Component isos={isos} onISOSelected={setISO} />
        )
    }

    return null;
}