import React from "react";
import "./menu-list-item.scss";
import PropTypes from "prop-types";
import salads from "../../img/salads.png";
import pizza from "../../img/pizza.png";
import meat from "../../img/meat.png";

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;
    const categoryImg = (category === "salads" ? salads
                        : category === "meat" ? meat
                        : category === "pizza" ? pizza : undefined);
    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}/>
            <img align="right" src={categoryImg} alt={category}/>
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