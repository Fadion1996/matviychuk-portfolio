import React from 'react';
// import {Link, Switch, Route} from "react-router-dom";
import {socialLinks} from '../../Data/socialLinks';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
// import {Main, Profile} from "../";
import css from './navbar.module.scss';

const NavBar = () => {

    return (
        <div className={css.navbar}>
            <a className={css.link} href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" >
                <FacebookIcon />
            </a>
            <a className={css.link} href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" >
                <LinkedInIcon />
            </a>
            <a className={css.link} href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" >
                <InstagramIcon />
            </a>
            <a className={css.link} href={`mailto:${socialLinks[3].url}`} target="_blank" rel="noopener noreferrer" >
                <EmailIcon />
            </a>
        </div>
    )
};

export default NavBar;