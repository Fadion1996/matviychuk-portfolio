import React from 'react'
import css from './navigation.module.scss'
import {Link, HashRouter, Route} from "react-router-dom";

const Children = (name, link) => ({match}) => {
  return (
    <li className={match && match.isExact ? css.active : css.item}>
      <Link to={link} className={css.name}>{name}</Link>
    </li>
  )
}
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
  ];

  return (
    <HashRouter basename='/'>
      <ul className={css.navigation}>
        {
          navigation.map(({id, name, link}) => <Route path={link} key={id} children={Children(name, link)} />)
        }
      </ul>
    </HashRouter>
  )
};

export default Navigation;