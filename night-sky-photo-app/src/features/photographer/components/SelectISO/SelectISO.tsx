
interface ISO {
    isoId:string,
    name:string,
    selected?: boolean
}

interface ISOModel {
    isos: ISO[],
    onISOSelected: any
}

export const SelectISO:React.FC<ISOModel> = ({isos, onISOSelected}) => {

    return (
        <div>
            <h2>Select image format</h2>
            <ul>
                {isos.map(iso => 
                    <li className={`${iso.selected ? 'font-bold' : ''}`} 
                        onClick={() => onISOSelected(iso)} key={iso.isoId}>
                        <span>{iso.name}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}