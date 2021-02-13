import React from "react";
import {connect} from "react-redux";
import {deleteFromCart} from "../../actions";
import "./cart-table.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CartTable = ({items, deleteFromCart}) => {
    if (!items.length) {
        return <div className="cart__title">Добавьте товары в корзину!</div>;
    }
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, sum} = item;
                        return (
                            <div key={id} className="cart__item">
                                <Link to={`/${id}`} className="pointer">
                                    <img src={url} className="cart__item-img" alt={title}/>
                                </Link>
                                <div className="cart__item-title">{title} {sum > 1 ? `(${sum})` : undefined}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        );
                    })
                }
            </div>
            <button className="cart__btn">Confirm</button>
        </>
    );
};

CartTable.propTypes = {
    items: PropTypes.array,
    onDelete: PropTypes.func,
    deleteFromCart: PropTypes.func
};

const mapStateToProps = ({items}) => {
    return {
        items
    };
};

const mapDispatchToProps = {
    deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);