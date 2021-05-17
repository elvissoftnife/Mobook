import React from 'react'
import { DescriptionAtom } from '../atoms/description.atom'
import { ImageAtom } from '../atoms/image.atom'
import { NameAtom } from '../atoms/name.atom'
import { TitleAtom } from '../atoms/title.atom'
import { ButtonMolecule } from './button.molecule'

import style from './infoCardCarousel.molecule.scss'
import { StarsMolecule } from './stars.molecule'

type InfoCardProps = {
    image:string
    cardStyle: string,
    buttonStyle:string
}

export const InfoCardCarouselMolecule = ({cardStyle,buttonStyle, image}:InfoCardProps)=> {
    return (
        <div className={"row "+style.card+" "+cardStyle}>
            <div className="col-md-6">
            <ImageAtom  style={ style.image} url={image} />

            </div>
            <div className="col-md-6">

                <TitleAtom data="Nombre del libro" style={style.book__title} />
                <NameAtom data="por Elvis Zapatero" style={ style.book__autor}/>
                <StarsMolecule/>
                <DescriptionAtom style={style.book__description} />
                <ButtonMolecule text="Ver el boton" style={style.book__button+" "+buttonStyle} />
            </div>
        </div>
    )
}
