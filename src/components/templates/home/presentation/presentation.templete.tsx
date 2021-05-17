import React from 'react'
import { CarouselOrganisms } from '../../../organisms/carousel.organisms'
import { SearchOrganisms } from '../../../organisms/search.organisms'
import styles  from  './presentation.templete.scss'

export default function PresentationTemplate() {
    return <>
        <SearchOrganisms />
        <CarouselOrganisms/>
    </>
}
