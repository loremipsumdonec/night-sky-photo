import { createContext, useContext, useEffect, useState } from "react";
import { Subject } from 'rxjs';

export interface IEvent {
  messageId:string,
  type:string,
  timestamp: string
}

interface EventStreamContextType  {
  subject: Subject<IEvent>
}

const initialEventStreamContext:EventStreamContextType = {
  subject: new Subject<IEvent>()
}

export const EventStreamContext = createContext<EventStreamContextType>(initialEventStreamContext);

export const useEventStreamContext = () => useContext(EventStreamContext);

