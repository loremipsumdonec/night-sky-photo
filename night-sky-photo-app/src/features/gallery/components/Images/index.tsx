import { Images as Component } from "./Images";
import { useImages } from "../../state/lightboard";

export const Images: React.FC = () => {

    const [ { images }] = useImages();

    return (
        <Component images={images} />
    )
}