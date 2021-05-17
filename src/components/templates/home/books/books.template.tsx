import React from 'react'
import { BookCardOrganisms } from '../../../organisms/bookCard.organisms'

export default function BooksTemplate() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <BookCardOrganisms/>
                </div>
                <div className="col-md-6">
                    <BookCardOrganisms/>
                </div>
                <div className="col-md-6">
                    <BookCardOrganisms/>
                </div>
                <div className="col-md-6">
                    <BookCardOrganisms/>
                </div>
                <div className="col-md-6">
                    <BookCardOrganisms/>
                </div> 
            </div>
        </div>
    )
}
