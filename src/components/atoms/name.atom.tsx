import React from 'react'

type NameProps={
    data: string,
    style:any
}

export  const NameAtom = ({ data,style }:NameProps)=> {
    return (
        <div className={style}>
            {data}
        </div>
    )
}
