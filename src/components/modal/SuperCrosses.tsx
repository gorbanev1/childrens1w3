// @flow 
import * as React from 'react';

type Props = {
    crosses: Cross[]
    children: React.ReactNode
};
type Cross={
id: number,
    model: string,
    size: string,
}

export const SuperCrosses = ({crosses, children}: Props) => {debugger

    return (

        <div>
        <ul>
            {crosses.map((c:Cross, index)=>{
                return (
                    <li key={index}>
                        <div>{c.id}</div>
                        <div>{c.size}</div>
                        <div>{c.model}</div>
                        <hr/>
                    </li>
                )
            })}
        </ul>
            <div>
                {children}
                {}
            </div>
            <hr/>
        </div>
    );
};