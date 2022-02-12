import React from 'react'

interface Props {
    text:string,
    onClick?: any
}

export const Button: React.FC<Props> = ({text, onClick}) => {
    return(
        <button onClick={onClick}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 p-1 rounded font-semibold">
            {text} ss
        </button>
    )
}