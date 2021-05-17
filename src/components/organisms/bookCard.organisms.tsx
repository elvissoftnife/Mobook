import React from 'react'
import { ImageAtom } from '../atoms/image.atom'
import { AvatarPersonBookMolecule } from '../molecules/avatarPersonBook.molecule'
import { InfoCardBookMolecule } from '../molecules/infoCardBook.molecule'
import style from './bookCard.organisms.scss'

export const BookCardOrganisms = () => {
    return (
        <div className={style.card}>
            <div className="row">
                <div className="col-md-5">
                    <ImageAtom  style={ style.card__image}  url="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"/>
                </div>
                <div className="col-md-7">
                    <InfoCardBookMolecule/>
                </div>
            </div>
            <div className="container pb-1">
                <hr />
                <AvatarPersonBookMolecule/>
            </div>
        </div>
    )
}
