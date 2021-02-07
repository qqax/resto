import React from "react";
import "./menu-list-item.scss";
import PropTypes from "prop-types";

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;
    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}/>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    );
};

MenuListItem.propTypes = {
    menuItem: PropTypes.object
};

export default MenuListItem;