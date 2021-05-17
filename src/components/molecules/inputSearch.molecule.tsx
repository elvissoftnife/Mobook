import React from 'react'

import style from './inputSearch.molecule.scss'

import { AiOutlineClose } from "react-icons/ai";

export const InputSearchMolecule = ()=> {
    return <div className={style.search}>
        <input placeholder="Ingresa el nombre del libro..." className={style.search__input} type="text" />
        <div className={style.search__clear}>
            <AiOutlineClose/>
        </div>
    </div>
}
