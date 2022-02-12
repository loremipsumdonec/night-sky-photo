import React from 'react';

interface TabProps {
    icon?:any;
    label?:string;
}

export const Tab: React.FC<TabProps> = ({icon, label, children}) => {
    return (
        <>
            {children}
        </>
    )
}