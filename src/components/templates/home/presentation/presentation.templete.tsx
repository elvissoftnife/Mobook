import React from 'react'
import { BookCardOrganisms } from '../../../organisms/bookCard.organisms'
import { CarouselOrganisms } from '../../../organisms/carousel.organisms'
import { GendersListOrganisms } from '../../../organisms/gendersList.organisms'
import { PersonListOrganisms } from '../../../organisms/personList.organisms'
import { SearchOrganisms } from '../../../organisms/search.organisms'
import styles  from  './presentation.templete.scss'

export default function PresentationTemplate() {
    return <>
        <div className="container-fluid">
            <SearchOrganisms />
            <CarouselOrganisms/>
        </div>
    </>
}
