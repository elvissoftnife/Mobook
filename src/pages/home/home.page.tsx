import React from 'react'
import PresentationTemplete from '../../components/templates/home/presentation/presentation.templete'
import GendersTemplete from '../../components/templates/home/genders/genders.template'
import BooksTemplate from '../../components/templates/home/books/books.template'
import ContributorsTemplate from '../../components/templates/home/contributors/contributors.template'

import style from './home.page.scss'

export default function HomePage() {
    return (
        <>
            <div className={style.home}>
                <PresentationTemplete />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ContributorsTemplate/>
                        </div>
                        <div className="col-md-9">
                            <GendersTemplete />
                            <BooksTemplate/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
