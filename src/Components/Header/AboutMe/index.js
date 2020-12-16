import React from 'react'
import css from './aboutMe.module.scss'

const AboutMe = () => {

    return (
        <div className={css.aboutMe}>
            <p className={css.name}>Anastasiya Matviychuk</p>
            <ul className={css.skills}>
                <li>SEO Copywriter</li>
                <li>Content Writer</li>
                <li>Translator</li>
                <li>Digital marketing</li>
            </ul>
        </div>
    )
};

export default AboutMe;