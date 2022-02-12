import { IEvent } from '../../state/eventStream';

interface Props {
    events: IEvent[]
}

export const Console: React.FC<Props> = ({events}) => {
    
    return (
        <div className="bg-slate-800 text-white text-sm">
            <table className="table-fixed">
                <tbody>
                        {events?.map((event, index) => 
                        <tr key={event.messageId}>
                            <td>{event.timestamp}</td>
                            <td>{event.type}</td>
                            <td>{JSON.stringify(event)}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}