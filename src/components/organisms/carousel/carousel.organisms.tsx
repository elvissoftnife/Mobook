import React from 'react'
import { ButtonMolecule } from '../../molecules/button.molecule'
import { InfoCardCarouselMolecule } from '../../molecules/infoCardCarousel.molecule'

import style from './carousel.organisms.scss'

export const  CarouselOrganisms=()=> {
    return (
        <>
            <div className={style.carousel}>
                <div className="row">
                <div className="col-md-4">
                    <InfoCardCarouselMolecule image="https://espacio.fundaciontelefonica.com/wp-content/uploads/2018/03/portada-libro-ruescas-700x994-563x800.jpg" cardStyle={ style.left__card }  buttonStyle={ style.left__button}/>
                </div>
                <div className="col-md-4">
                    <InfoCardCarouselMolecule image="https://i.pinimg.com/originals/54/cf/0f/54cf0f4c256a93eb02c0d5473f4ab0e7.jpg" cardStyle={ style.center__card }  buttonStyle={ style.center__button}/>
                </div>
                <div className="col-md-4">
                    <InfoCardCarouselMolecule image="https://upload.wikimedia.org/wikipedia/commons/a/a8/Puerta_del_sol_-_Portada_de_novela_de_Ricardo_Bastid_Peris.jpg" cardStyle={style.right__card} buttonStyle={ style.right__button}/>
                </div>
            </div>
            </div>
        </>
    )
}
