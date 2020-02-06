import React from 'react';
import css from './profile.module.scss';
import {profileTexts} from '../../../Data/profile';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from '@material-ui/icons/Telegram';

const Profile = () => {
    const {title, education, workExperience, socials, getInTouch} = profileTexts;
    return (
        <div className={css.profile}>
            <div className={css.title}>
                <p>{title.first}</p>
                <p>{title.second}
                    <a href={title.url} target="_blank" rel="noopener noreferrer" >Freelancehunt</a>.
                </p>
            </div>
            <div className={css.education}>
                <p className={css.title}>Education</p>
                <ul>
                {
                    education.map(({name, degree, specialization, date, url}, id) =>
                        <li className={css.knowledge} key={id}>
                            <a className={css.name} href={url} target="_blank" rel="noopener noreferrer" >
                                {name}
                            </a>
                            <p className={css.degree}>
                                {degree}
                            </p>
                            <p className={css.specialization}>
                                {specialization}
                            </p>
                            <p className={css.date}>
                                {date}
                            </p>
                        </li>
                    )
                }
                </ul>
            </div>
            <div className={css.workExperience}>
                <p className={css.title}>Work Experience</p>
                <ul>
                {
                    workExperience.map(({name, url, position, specialization, date}, id) =>
                        <li className={css.work} key={id}>
                            <a className={css.name} href={url} target="_blank" rel="noopener noreferrer" >
                                {name}
                            </a>
                            <p className={css.position}>
                                {position}
                            </p>
                            <p className={css.position}>
                                {specialization}
                            </p>
                            <p className={css.specialization}>
                                {date}
                            </p>
                        </li>
                    )
                }
                </ul>
            </div>
            <p className={css.getInTouch}>{getInTouch}</p>
            <div className={css.socials}>
                <a className={css.link} href={`tg://resolve?domain=${socials.telegram}`} >
                    <TelegramIcon style={{ fontSize: 40 }}/>
                    <span>{socials.telegram}</span>
                </a>
                <a className={css.link} href={socials.linkedin} target="_blank" rel="noopener noreferrer" >
                    <LinkedInIcon style={{ fontSize: 40 }}/>
                    <span>in/anastasiya-matviychuk-823902167/</span>
                </a>
                <a className={css.link} href={`mailto:${socials.gmail}`} target="_blank" rel="noopener noreferrer" >
                    <EmailIcon style={{ fontSize: 40 }}/>
                    <span>{socials.gmail}</span>
                </a>
            </div>
        </div>
    )
};

export default Profile;