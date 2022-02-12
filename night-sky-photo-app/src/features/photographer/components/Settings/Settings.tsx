interface Props {
    name:string
}

export const Settings: React.FC<Props> = ({name}) => {
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}