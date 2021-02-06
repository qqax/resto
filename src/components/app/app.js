import React from "react";
import {MainPage, CartPage} from "../pages";
import AppHeader from "../app-header";
import WithRestoService from "../hoc";
import PropTypes from "prop-types";

import Background from "./food-bg.jpg";

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    );
};

App.propTypes = {
    RestoService: PropTypes.object
};

export default WithRestoService()(App);