import React from 'react';
import Portfolio from './Portfolio';
import Profile from './Profile';
import {Switch, Route} from "react-router-dom";
import css from './main.module.scss';

const Main = () => {

    return (
        <div className={css.main}>
            <Switch>
                <Route exact path='/' component={Portfolio}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        </div>
    )
};

export default Main;