import React from "react";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";
import css from "./main.module.scss";

const Main = () => {
    //  /matviychuk-portfolio
    return (
        <div className={css.main}>
            <Switch>
                <Route
                    exact
                    path="/matviychuk-portfolio"
                    component={Portfolio}
                />
                <Route
                    path="/matviychuk-portfolio/profile"
                    component={Profile}
                />
            </Switch>
        </div>
    );
};

export default Main;
