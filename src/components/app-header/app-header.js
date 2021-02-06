import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to="/menu" className="header__link">
                Menu
            </Link>
            <Link to="/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    );
};

AppHeader.propTypes = {
    total: PropTypes.number
};

export default AppHeader;