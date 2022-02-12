import React from 'react'

interface Props {
    data:string,
    onStartPreview:any;
    onStopPreview:any;
}

export const Preview: React.FC<Props> = ({data, onStartPreview, onStopPreview}) => {
    return(
        <div className="bg-slate-400 border border-black w-full h-full">
            <button onClick={onStartPreview}>Start</button>
            <button onClick={onStopPreview}>Stop</button>
            {data &&
                <img alt="lorem" src={`data:image/jpeg;base64, ${data}`}/>
            }
        </div>
    )
}
