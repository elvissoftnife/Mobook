import React from 'react'
import { NameAtom } from '../atoms/name.atom'
import { InputSearchMolecule } from '../molecules/inputSearch.molecule'

import style from './search.organisms.scss'

export const  SearchOrganisms= ()=> {
    return (
        <>
            <InputSearchMolecule/>
        </>
    )
}
