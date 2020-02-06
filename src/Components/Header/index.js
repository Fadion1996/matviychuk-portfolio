import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import css from './header.module.scss'


const Header = () => {
    return(
        <div className={css.header}>
            <Logo/>
            <Navigation/>
        </div>
    )
};

export default Header;