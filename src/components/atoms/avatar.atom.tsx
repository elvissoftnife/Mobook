import React from 'react'

import style from './avatar.atom.scss'

export const AvatarAtom = () => {
    return (
        <div className={style.avatar}>
            <img className={style.avatar__image} src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1589758880/content-items/004/599/793/ezgif.com-crop_%25283%2529-original.gif?1589758880" alt="" />
        </div>
    )
}
