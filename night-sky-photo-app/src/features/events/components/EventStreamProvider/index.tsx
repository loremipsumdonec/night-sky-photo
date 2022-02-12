import { useState, useEffect } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

import {
    IEvent, 
    EventStreamContext, 
    useEventStreamContext 
} from '../../state/eventStream';

export const EventStreamProvider:React.FC<{url:string}> = ({url, children}) => {

    const { subject } = useEventStreamContext();
    const [connection, setConnection] = useState<null | HubConnection>(null);

    useEffect(() => {
        
        const connect = new HubConnectionBuilder()
          .withUrl(url)
          .withAutomaticReconnect()
          .build();
    
        setConnection(connect);

      }, [url]);

      useEffect(() => {
        if (connection) {
          connection
            .start()
            .then(() => {
              connection.on("ReceiveMessage", (message, type, timestamp) => {

                try 
                {
                  var event:IEvent = {...message, type, timestamp};
                  subject.next(event);

                }catch(ex) 
                {
                  console.log(ex);
                }
              });
            })
            .catch((error) => console.log(error));
        }
      }, [connection, subject]);

    return(
        <EventStreamContext.Provider value={{subject}}>
            {children}
        </EventStreamContext.Provider>
    )
}