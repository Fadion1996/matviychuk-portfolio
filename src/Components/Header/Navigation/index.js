import React from 'react'
import css from './navigation.module.scss'
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from "react-dom";

const Navigation = () => {
    const navigation = [
        {
            id: 1,
            name: 'All work',
            link: '/'
        },
        {
            id: 2,
            name: 'Profile',
            link: '/profile'
        },
        {
            id: 3,
            name: 'News Letter',
            link: '#'
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