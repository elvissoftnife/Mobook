import React from 'react'
import { AvatarAtom } from '../atoms/avatar.atom'
import { NameAtom } from '../atoms/name.atom'
import style from './avatarPerson.molecule.scss'
export const AvatarPersonBookMolecule = () => {
    return (
        <div className={style.avatarPerson}>
            <AvatarAtom />
            <NameAtom data="Elvis Zapatero" style={ style.avatarPerson__name}/>
        </div>
    )
}
