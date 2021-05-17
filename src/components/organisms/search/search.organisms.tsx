import React from 'react'
import { NameAtom } from '../../atoms/name.atom'
import { InputSearchMolecule } from '../../molecules/inputSearch.molecule'

import style from './search.organisms.scss'

export const  SearchOrganisms= ()=> {
    return (
        <div className={style.search}>
            <div className="row">
                <div className="col-2">
                    <p className={style.logo}>
                        Mobook
                    </p>
                </div>
                <div className="col-8">
                        <InputSearchMolecule/>
                </div>
                <div className="col-2">
                    <div className={style.upload}>Subir</div>
                </div>
            </div>
        </div>
            
    )
}
