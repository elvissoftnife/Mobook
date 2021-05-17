import React from 'react'

type TitleProps = {
    data: string,
    style:string
}

export const TitleAtom = ({data, style}:TitleProps)=> {
    return (
        <div className={style}>
            {data}
        </div>
    )
}
