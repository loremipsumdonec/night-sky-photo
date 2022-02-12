import { useImageFormats } from "features/photographer/state/camera";
import { SelectImageFormat as Component } from "./SelectImageFormat";

export const SelectImageFormat: React.FC = () => {

    const [ { imageFormats }, { setImageFormat }] = useImageFormats();

    if(imageFormats) 
    {
        return (
            <Component imageFormats={imageFormats} onImageFormatSelected={setImageFormat} />
        )
    }

    return null;
}