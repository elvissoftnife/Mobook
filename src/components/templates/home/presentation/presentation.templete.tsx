import React from 'react'
import { CarouselOrganisms } from '../../../organisms/carousel/carousel.organisms'
import { SearchOrganisms } from '../../../organisms/search/search.organisms'
import styles  from  './presentation.templete.scss'

export default function PresentationTemplate() {
    return <>
        <div className="container-fluid">
            <SearchOrganisms />
            <CarouselOrganisms/>
        </div>
    </>
}
