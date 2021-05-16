import React from 'react'
import styles  from  './presentation.templete.scss'

export default function PresentationTemplate() {
    return (
        <div className="container">
            <p className={styles.presentation__search}>Navegafor</p>
            <p className={styles.presentation__carousel}>carusel</p>
            <span className="h1">hola</span>

        </div>
    )
}
