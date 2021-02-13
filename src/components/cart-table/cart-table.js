import React from "react";
import {connect} from "react-redux";
import "./cart-table.scss";
import PropTypes from "prop-types";

const CartTable = ({items, onDelete}) => {
    if (!items.length) {
        return <div className="cart__title">Добавьте товары в корзину!</div>;
    }
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}/>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => {onDelete(id);}} className="cart__close">&times;</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

CartTable.propTypes = {
    items: PropTypes.array,
    onDelete: PropTypes.func
};

const mapStateToProps = ({items}) => {
    return {
        items
    };
};

const mapDispatchToProps = () => {
    return {
        onDelete: (id) => {
            console.log(`${id} deleted!`);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);