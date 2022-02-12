import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useSubscription, gql, useQuery } from '@apollo/client';
import { IEvent, useEventStreamContext } from "features/events/state/eventStream";
import { filter } from 'rxjs/operators';

interface LightboardContextType {
}

const initialLightboardContext:LightboardContextType = {
}

export const LightboardContext = createContext<LightboardContextType>(initialLightboardContext);

export const useLightboardContext = () => useContext(LightboardContext);

const GET_IMAGES = gql`
query images($fetch:Int!, $offset:Int!){
  images(fetch: $fetch, offset: $offset) {
    images {
      imageId,
      tags
    }
  }
}`

export const useImages = () => {

  const [ images, setImages ] = useState([] as any);
  
  const { subject } = useEventStreamContext();

    useEffect(() => {

        const subscription = subject.pipe(
          filter(ev => ev.type === 'ImageCreated')
        ).subscribe(ev => { 
          setImages([ ev, ...images.slice(0,18)])
        });
  
        return () => subscription.unsubscribe();
  
      }, [subject, images]);

  return [
      {
          images
      }
  ]
}