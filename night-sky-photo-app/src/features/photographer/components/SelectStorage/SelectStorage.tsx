
interface Storage {
    storageId:string,
    name:string,
    selected?: boolean
}

interface StorageModel {
    storages: Storage[],
    onStorageSelected: any
}

export const SelectStorage:React.FC<StorageModel> = ({storages, onStorageSelected}) => {

    return (
        <div>
            <h2>Select storage</h2>
            <ul>
                {storages.map(storage => 
                    <li className={`${storage.selected ? 'font-bold' : ''}`} 
                        onClick={() => onStorageSelected(storage)} key={storage.storageId}>
                        <span>{storage.name}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}