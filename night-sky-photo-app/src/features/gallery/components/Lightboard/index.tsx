import { 
    LightboardContext, 
    useLightboardContext 
} from '../../state/lightboard';

export const Lightboard:React.FC = ({children}) => {

    const { } = useLightboardContext();

    return(
        <LightboardContext.Provider value={{}}>
            {children}
        </LightboardContext.Provider>
    )
}