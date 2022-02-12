
interface Camera {
    cameraId:string,
    name:string,
    connected?: boolean
}

interface SelectModel {
    cameras: Camera[],
    onCameraSelected: any
}

export const Select:React.FC<SelectModel> = ({cameras, onCameraSelected}) => {

    return (
        <div>
            <h2>Select camera</h2>
            <ul>
                {cameras.map(camera => 
                    <li className={`${camera.connected ? 'font-bold' : ''}`} 
                        onClick={() => onCameraSelected(camera)} key={camera.cameraId}>
                            <span>{camera.name} ({camera.cameraId})</span>
                        </li>
                )}
            </ul>
        </div>
    )
}