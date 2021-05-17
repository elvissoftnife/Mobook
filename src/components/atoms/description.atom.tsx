import React from 'react'

type DescriptionProps = {
    style:string
}

export const DescriptionAtom = ({style}:DescriptionProps)=> {
    return (
        <div className={style}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti in recusandae sed amet, ab consequatur dolore ipsum doloribus est.
        </div>
    )
}
