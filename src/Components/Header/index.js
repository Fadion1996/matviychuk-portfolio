import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import AboutMe from './AboutMe'
import css from './header.module.scss'


const Header = () => {
  return (
    <div className={css.header}>
      <AboutMe/>
      <Logo/>
      <Navigation/>
    </div>
  )
};

export default Header;