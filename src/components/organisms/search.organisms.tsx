import React from 'react'
import { NameAtom } from '../atoms/name.atom'
import { InputSearchMolecule } from '../molecules/inputSearch.molecule'

import style from './search.organisms.scss'

export const  SearchOrganisms= ()=> {
    return ( 
        <div className="row">
            <div className="col-2">
                <p className={style.logo}>
                    Mobook
                </p>
                </div>
                <div className="col-10">
                     <InputSearchMolecule/>
                </div>
            </div>
    )
}
