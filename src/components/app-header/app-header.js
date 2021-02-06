import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import PropTypes from "prop-types";

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <a className="header__link" href="#">
                Menu
            </a>
            <a className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a>
        </header>
    );
};

AppHeader.propTypes = {
    total: PropTypes.number
};

export default AppHeader;