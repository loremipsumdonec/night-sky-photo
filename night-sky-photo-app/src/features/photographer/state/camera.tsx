import { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useMutation, gql } from '@apollo/client';

export interface Camera {
    cameraId:string;
    name:string;
}

export interface Storage {
    storageId:string;
    name:string;
    selected: boolean;
}

export interface ImageFormat {
    imageFormatId:string;
    name:string;
    selected: boolean;
}

export interface ISO {
    isoId:string;
    name:string;
    selected: boolean;
}

const stub = (): never => {
    throw new Error('You forgot to wrap your component in <CameraContextType>.');
};

interface CameraContextType  {
    camera?:Camera;
    setCamera: any;
}

const initialCameraContext:CameraContextType = {
    setCamera: stub
}

export const CameraContext = createContext<CameraContextType>(initialCameraContext);

export const useCameraContext = () => useContext(CameraContext);

const CONNECT = gql`
    mutation connect($cameraId:String!) {
        connect(cameraId:$cameraId, tags:"primary")
    }
`;

const CAPTURE_IMAGE = gql`
    mutation captureImage {
        captureImage
    }
`;

const CAMERAS = gql`
    query cameras{
        cameras {
            cameras {
                cameraId,
                name,
                connected
            }
        }
    }
`;

const START_PREVIEW = gql`
    mutation startPreview {
        startPreview(fps: 30)
    }
`;

const STOP_PREVIEW = gql`
    mutation stopPreview {
        stopPreview
    }
`;

export const useCameras = () => {

    const { setCamera } = useCameraContext()
    const { data, loading: isLoading, error } = useQuery(CAMERAS);
    const [ connect ] = useMutation(CONNECT, { refetchQueries: ['cameras']});

    const onConn = async (camera:Camera) => {
        const result = await connect({ variables: { cameraId: camera.cameraId }});

        if(result.data?.connect) {
            setCamera(camera);
        }
    }

    return [
        { 
            cameras: data?.cameras ? data?.cameras.cameras : [], 
            isLoading, 
            error 
        },
        {
            connect: onConn
        }
    ]
}

export const useCamera = () => {
    
    const { camera, setCamera } = useCameraContext()
    const [captureImage] = useMutation(CAPTURE_IMAGE);
    const [startPreview] = useMutation(START_PREVIEW);
    const [stopPreview] = useMutation(STOP_PREVIEW);

    return [
        {
            camera,
            isLoading: false,
            error: null
        },
        {
            setCamera,
            captureImage,
            startPreview,
            stopPreview
        }
    ]
}

const CAPTURE_TARGETS = gql`
    query captureTargets {
        captureTarget {
            current,
            values
        }
    }
`;

const SET_CAPTURE_TARGET = gql`
    mutation captureTarget($value:String!) {
        captureTarget(value: $value)
    }
`;

export const useStorages = () => {

    const [ storages, setStorages ] = useState<Storage[]>([]);
    const { data, loading: isLoading, error } = useQuery(CAPTURE_TARGETS);
    const [ setCaptureTarget ] = useMutation(SET_CAPTURE_TARGET, { refetchQueries: ['captureTargets']});

    useEffect(() => {

        if(!isLoading) {
            
            setStorages(data.captureTarget.values.map((v:string) => { 
                return { storageId: v, name: v, selected: v === data.captureTarget.current }
            }))
        }

    }, [data, isLoading])

    const setStorage = (storage:Storage) => {
        setCaptureTarget({ variables: { value: storage.storageId} });
    }

    return [
        {
            storages,
            isLoading,
            error
        },
        {
            setStorage
        }
    ]
}

const IMAGE_FORMATS = gql`
    query imageFormats {
        imageFormat {
            current,
            values
        }
    }
`;

const SET_IMAGE_FORMAT = gql`
    mutation imageFormat($value:String!) {
        imageFormat(value: $value)
    }
`;

export const useImageFormats = () => {

    const [ imageFormats, setImageFormats ] = useState<ImageFormat[]>([]);
    const { data, loading: isLoading, error } = useQuery(IMAGE_FORMATS);
    const [ setImageFormatMutation ] = useMutation(SET_IMAGE_FORMAT, { refetchQueries: ['imageFormats']});

    useEffect(() => {

        if(!isLoading) {
            
            setImageFormats(data.imageFormat.values.map((v:string) => { 
                return { imageFormatId: v, name: v, selected: v === data.imageFormat.current }
            }))
        }

    }, [data, isLoading])

    const setImageFormat = (imageFormat:ImageFormat) => {
        setImageFormatMutation({ variables: { value: imageFormat.imageFormatId} });
    }

    return [
        {
            imageFormats,
            isLoading,
            error
        },
        {
            setImageFormat
        }
    ]
}

const ISOS = gql`
    query isos {
        iso {
            current,
            values
        }
    }
`;

const SET_ISO = gql`
    mutation iso($value:String!) {
        iso(value: $value)
    }
`;

export const useISOS = () => {

    const [ isos, setISOS ] = useState<ISO[]>([]);
    const { data, loading: isLoading, error } = useQuery(ISOS);
    const [ setISOMutation ] = useMutation(SET_ISO, { refetchQueries: ['isos']});

    useEffect(() => {

        if(!isLoading) {
            
            setISOS(data.iso.values.map((v:string) => { 
                return { isoId: v, name: v, selected: v === data.iso.current }
            }))
        }

    }, [data, isLoading])

    const setISO = (iso:ISO) => {
        setISOMutation({ variables: { value: iso.isoId} });
    }

    return [
        {
            isos,
            isLoading,
            error
        },
        {
            setISO
        }
    ]
}