import React from 'react'
import { NameAtom } from '../atoms/name.atom'

type ButtonProps={
    text: string,
    style: any,
}

export const ButtonMolecule=({text , style}:ButtonProps)=> {
    return (
        <div className={style}>
            <NameAtom data={text} />
        </div>
    )
}
