import React, {Component} from "react";
import {connect} from "react-redux";
import withRestoService from "../hoc";
import {deleteFromCart, sendCart, clearCart} from "../../actions";
import "./cart-table.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class CartTable extends Component {
    render() {
        const {items, sent, sendCart, clearCart, deleteFromCart, RestoService} = this.props;

        if (!items.length) {
            return <div className="cart__title">Добавьте товары в корзину!</div>;
        }

        const sendOrderToServer = (customer, items) => {
            sendCart(0);
            const order = getOrder(items);
            RestoService.sendOrder(customer, order)
                .then((id) => sendCart(id))
                .catch((err) => {
                    console.log(err);
                    sendCart(-1);
                });
        };

        const getOrder = (items) => {
            return items.map(item => {
                return {
                    item: item.id,
                    amount: item.sum
                };
            });
        };

        const SendButton = (sent === 0 ? () => {
                    document.body.classList.add("cart__sent");
                    return <button className="cart__btn">Отправляется</button>;
                }
            : sent === -1 ? () => {
                    document.body.classList.remove("cart__sent");
                    setTimeout(() => sendCart(undefined), 5000);
                    return <button className="cart__btn">Попробуйте позже</button>;
                }
            : sent > 0 ? () => {
                    document.body.classList.remove("cart__sent");
                    setTimeout(() => {
                        clearCart();
                        sendCart(undefined);
                    }, 5000);
                    return <button className="cart__btn">Заказ №{sent} отправлен</button>;
                }
            : () => <button onClick={() => sendOrderToServer("alex", items)} className="cart__btn">Оформить
                        заказ</button>
        );

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
                <SendButton/>
            </>
        );
    }
}

CartTable.propTypes = {
    items: PropTypes.array,
    onDelete: PropTypes.func,
    deleteFromCart: PropTypes.func,
    RestoService: PropTypes.object,
    sent: PropTypes.number,
    sendCart: PropTypes.func,
    clearCart: PropTypes.func
};

const mapStateToProps = ({items, sent}) => {
    return {
        items,
        sent
    };
};

const mapDispatchToProps = {
    deleteFromCart,
    sendCart,
    clearCart
};

export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));