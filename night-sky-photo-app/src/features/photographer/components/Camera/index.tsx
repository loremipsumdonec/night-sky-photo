import { useState } from 'react';
import { 
    CameraContext
} from '../../state/camera';

export const Camera:React.FC = ({children}) => {

    const [, setCamera ] = useState(null);

    return(
        <CameraContext.Provider value={{setCamera}}>
            {children}
        </CameraContext.Provider>
    )
}