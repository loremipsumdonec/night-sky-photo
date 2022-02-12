
interface ImageFormat {
    imageFormatId:string,
    name:string,
    selected?: boolean
}

interface ImageFormatModel {
    imageFormats: ImageFormat[],
    onImageFormatSelected: any
}

export const SelectImageFormat:React.FC<ImageFormatModel> = ({imageFormats, onImageFormatSelected}) => {

    return (
        <div>
            <h2>Select image format</h2>
            <ul>
                {imageFormats.map(imageFormat => 
                    <li className={`${imageFormat.selected ? 'font-bold' : ''}`} 
                        onClick={() => onImageFormatSelected(imageFormat)} key={imageFormat.imageFormatId}>
                        <span>{imageFormat.name}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}