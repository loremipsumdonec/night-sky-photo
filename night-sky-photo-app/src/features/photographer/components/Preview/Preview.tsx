import React from 'react'

interface Props {
    data:string,
    onStartPreview:any;
    onStopPreview:any;
}

export const Preview: React.FC<Props> = ({data, onStartPreview, onStopPreview}) => {
    return(
        <div className="border border-black w-full h-full">

            {data &&
                <img alt="lorem" src={`data:image/jpeg;base64, ${data}`}/>
            }

            <div className="flex">
                <button onClick={onStartPreview}>Start</button>
                <button onClick={onStopPreview}>Stop</button>
            </div>
            
        </div>
    )
}
