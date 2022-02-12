import React from 'react'

interface Image {
    imageId:string,
    tags:string[]
}

interface Model {
    images: Image[]
}

export const Images:React.FC<Model> = ({images}) => {

    return (
        <div>
            {images?.map(image =>
                <img alt={image.imageId} key={image.imageId} src={`http://photo-gallery-service:8080/serve/images/${image.imageId}.jpg?apply=resize(240,0)`}/>
            )}
        </div>
    )
}