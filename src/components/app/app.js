import React from "react";
import {MainPage, CartPage} from "../pages";
import AppHeader from "../app-header";
import {Switch, Route} from "react-router-dom";

import Background from "./food-bg.jpg";

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path="/menu">
                    <h1>
                        Меню
                    </h1>
                </Route>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    );
};

export default App;