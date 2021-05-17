import React from 'react'

import style from './inputSearch.molecule.scss'

export const InputSearchMolecule = ()=> {
    return <div className={style.search}>
        <input placeholder="Ingresa el nombre del libro..." className={style.search__input} type="text" />
    </div>
}
