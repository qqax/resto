import React from "react";
import {connect} from "react-redux";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AppHeader = ({amount}) => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                Menu
            </Link>
            <Link to="/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"/>
                Total: {amount} $
            </Link>
        </header>
    );
};

AppHeader.propTypes = {
    amount: PropTypes.number
};

const mapStateToProps = ({amount}) => {
    return {
        amount
    };
};

export default connect(mapStateToProps)(AppHeader);