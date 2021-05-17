import React from 'react'

type ButtonProps={
    text: string,
    style: any,
}

export const ButtonMolecule=({text , style}:ButtonProps)=> {
    return (
        <div className={style}>
            {text}
        </div>
    )
}
