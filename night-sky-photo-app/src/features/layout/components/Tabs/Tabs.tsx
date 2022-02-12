import React, { ReactNode, useState } from 'react';

export const Tabs: React.FC<{children:ReactNode[]}> = ({children}) => {

    const [tab, setTab] = useState(0);

    return (
        <div>
            {children?.map((child:any, index:any) => 
                <button onClick={() => setTab(index)}>{child.props.label}</button>
            )}

            <div>
                {(children[tab] as any).props.children}
            </div>
        </div>
    );
} 