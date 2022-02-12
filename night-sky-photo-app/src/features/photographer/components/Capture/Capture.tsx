interface Props {
    onCapture:any
}

export const Capture: React.FC<Props> = ({onCapture}) => {
    
    return (
        <button onClick={onCapture}>Capture</button>
    );
}