import React from 'react'
import { DescriptionAtom } from '../atoms/description.atom'
import { NameAtom } from '../atoms/name.atom'
import { TitleAtom } from '../atoms/title.atom'
import { ButtonMolecule } from './button.molecule'
import style from './infoCardBook.molecule.scss'
import { StarsMolecule } from './stars.molecule'
export const InfoCardBookMolecule = () => {
    return (
        <div>
            <TitleAtom data="Nombre del libro" style={style.book__title} />
                <NameAtom data="por Elvis Zapatero" style={ style.book__autor}/>
                <StarsMolecule/>
                <DescriptionAtom style={style.book__description} />
        </div>
    )
}
