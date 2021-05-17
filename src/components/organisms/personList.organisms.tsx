import React from 'react'
import { AvatarPersonItemMolecule } from '../molecules/avatarPersonItem.molecule'

import style from './personList.organisms.scss'

export const PersonListOrganisms = () => {
    return (
        <div>
            <p className={style.personList__title}>Ultimos contribuidores</p>
            <div>
                <AvatarPersonItemMolecule/>
                <AvatarPersonItemMolecule/>
                <AvatarPersonItemMolecule/>
            </div>
        </div>
    )
}
