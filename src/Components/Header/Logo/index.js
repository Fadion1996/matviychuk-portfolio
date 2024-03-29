import React from 'react'
import css from './logo.module.scss'
import {img2} from '../../../Images'
import {profileTexts} from '../../../Data/profile'

const Logo = () => {
  return (
    <a className={css.logo} href={`mailto:${profileTexts.socials.gmail}`}>
      <img className={css.img} src={img2}/>
      <span className={css.text}>Contact me</span>
    </a>
  )
};

export default Logo;