import React from 'react'
import { 
    Camera, 
    Capture, 
    Preview,
    Select,
    SelectStorage,
    SelectImageFormat,
    SelectISO
} from '../../../photographer/components'

import {
    Lightboard, 
    Images, 
} from '../../../gallery/components'

import {
    Console 
} from '../../../events/components'

interface Props {
}

export const NightSkyPhoto: React.FC<Props> = () => {

    return(
        <div>
            <Camera>
                <Select/>
                <SelectStorage/>
                <SelectImageFormat />
                <SelectISO/>
                <Capture/>
                <Preview/>
            </Camera>
            <Console/>
        </div>
    )
}
