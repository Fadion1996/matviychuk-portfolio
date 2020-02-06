import React from 'react'
import css from './logo.module.scss'
import {img1} from '../../../Images'

const Logo = () => {
    return (
        <div className={css.logo}>
            <img className={css.img} src={img1} />
        </div>
    )
};

export default Logo;