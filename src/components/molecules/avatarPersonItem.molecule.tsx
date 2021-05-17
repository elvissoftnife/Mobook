import React from 'react'
import { AvatarAtom } from '../atoms/avatar.atom'
import { NameAtom } from '../atoms/name.atom'
import style from './avarPersonItem.molecule.scss'

export const AvatarPersonItemMolecule = () => {
    return (
        <div className={style.avatarPerson}>
            <AvatarAtom />
            <NameAtom data="Elvis Zapatero" style={ style.avatarPerson__name}/>
        </div>
    )
}
