import React from 'react'

type ImageProps = {
    url:string
    style:string
}

export const ImageAtom = ({style, url}:ImageProps)=> {
    return (
        <img className={style} src={url} alt="imagen" />
    )
}
