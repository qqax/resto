import React from "react";
import "./menu-list-item.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, id} = menuItem;
    return (
        <li className="menu__item">
            <div className="menu__title_sm">{title}</div>
            <Link to={`/${id}`} className="pointer">
                <img className="menu__img" src={url} alt={title}/>
            </Link>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={onAddToCart} className="menu__btn">Add to cart</button>
            <span className = {`menu__catImg ${category}_big`}/>
        </li>
    );
};

MenuListItem.propTypes = {
    menuItem: PropTypes.object,
    onAddToCart: PropTypes.func
};

export default MenuListItem;