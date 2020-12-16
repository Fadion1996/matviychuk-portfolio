import React from "react";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import { Route, HashRouter } from "react-router-dom";
import css from "./main.module.scss";

const Main = () => {
    //  /matviychuk-portfolio
    return (
        <div className={css.main}>
            <HashRouter basename='/'>
                <Route
                    exact
                    path="/"
                    component={Portfolio}
                />
                <Route
                    path="/profile"
                    component={Profile}
                />
            </HashRouter>
        </div>
    );
};

export default Main;
