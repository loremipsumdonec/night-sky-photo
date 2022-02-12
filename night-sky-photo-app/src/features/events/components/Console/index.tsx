import { Console as Component } from "./Console";
import { useEffect, useState } from "react";
import { IEvent, useEventStreamContext } from "../../state/eventStream";

export const Console: React.FC = () => {

    const [ events, setEvents ] = useState<IEvent[]>([]);
    const { subject } = useEventStreamContext();

    useEffect(() => {

        const subscription = subject.subscribe(
          ev => {
            setEvents([ev, ...events.slice(0,18)])
          }
        );
  
        return () => subscription.unsubscribe();
  
      }, [subject, events]);

    return (
        <Component events={events} />
    )
}