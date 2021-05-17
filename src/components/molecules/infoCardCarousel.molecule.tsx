import React from 'react'
import { DescriptionAtom } from '../atoms/description.atom'
import { ImageAtom } from '../atoms/image.atom'
import { NameAtom } from '../atoms/name.atom'
import { TitleAtom } from '../atoms/title.atom'
import { ButtonMolecule } from './button.molecule'

import style from './infoCardCarousel.molecule.scss'
import { StarsMolecule } from './stars.molecule'

export const InfoCardCarouselMolecule = ()=> {
    return (
        <div className={"row "+style.card}>
            <div className="col-md-6">
            <ImageAtom  style={ style.image} url="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" />

            </div>
            <div className="col-md-6">

                <TitleAtom data="Nombre del libro" style={style.book__title} />
                <NameAtom data="por Elvis Zapatero" style={ style.book__autor}/>
                <StarsMolecule/>
                <DescriptionAtom style={style.book__description} />
                <ButtonMolecule text="Ver el boton" style={style.book__button} />
            </div>
        </div>
    )
}
