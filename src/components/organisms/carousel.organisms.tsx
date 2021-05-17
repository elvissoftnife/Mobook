import React from 'react'
import { ButtonMolecule } from '../molecules/button.molecule'
import { InfoCardCarouselMolecule } from '../molecules/infoCardCarousel.molecule'

import style from './carousel.organisms.scss'

export const  CarouselOrganisms=()=> {
    return (
        <>
            <InfoCardCarouselMolecule/>
            <InfoCardCarouselMolecule/>
            <InfoCardCarouselMolecule/>
        </>
    )
}
