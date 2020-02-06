import React from 'react'
import css from './navigation.module.scss'
import {Link, Route} from "react-router-dom";

const Navigation = () => {
    const navigation = [
        {
            id: 1,
            name: 'All work',
            link: '/matviychuk-portfolio'
        },
        {
            id: 2,
            name: 'Profile',
            link: '/matviychuk-portfolio/profile'
        },
    ];

    return (
        <ul className={css.navigation}>
            {
                navigation.map(({id, name, link}) =>
                    <Route path={link}
                           key={id}
                           children={({ match }) => (
                                <li className={match && match.isExact ? css.active : css.item} >
                                    <Link to={link} className={css.name}>{name}</Link>
                                </li>
                            )
                        }
                    />
                )
            }
        </ul>
    )
};

export default Navigation;