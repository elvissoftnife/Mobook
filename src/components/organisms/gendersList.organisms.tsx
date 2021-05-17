import React from 'react'

import style from './gendersList.organisms.scss'

export const GendersListOrganisms = () => {
    return (
        <div className={style.genders}>
            <div className="row">
                <div className="col-md-3">
                    <div className={style.genders__title}>
                        Filtro por genero
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={style.genders__items}>
                        
                    <div className={style.genders__item}>Todos</div>
                    <div className={style.genders__item+" "+style.genders__active}>Negocios</div>
                    <div className={style.genders__item}>Ciencia</div>
                    <div className={style.genders__item}>Ficcion</div>
                    </div>
                </div>
                <hr className={style.genders__hr} />
            </div>
        </div>
    )
}
