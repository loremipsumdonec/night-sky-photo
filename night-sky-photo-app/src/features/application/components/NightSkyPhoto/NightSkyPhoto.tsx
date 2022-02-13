import React from 'react'
import { 
    Camera, 
    Capture, 
    Preview,
    Select
} from '../../../photographer/components'

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
                <Capture/>
                <Preview/>
            </Camera>
            <Console/>
        </div>
    )
}
