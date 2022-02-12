import { useStorages } from "features/photographer/state/camera";
import { SelectStorage as Component } from "./SelectStorage";

export const SelectStorage: React.FC = () => {

    const [ { storages }, { setStorage }] = useStorages();

    if(storages) 
    {
        return (
            <Component storages={storages} onStorageSelected={setStorage} />
        )
    }

    return null;
}