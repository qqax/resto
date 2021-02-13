import React, {Component} from "react";
import {connect} from "react-redux";
import withRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError, addedToCart} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";
import "./itemPage.css";
import PropTypes from "prop-types";

class ItemPage extends Component {
    static propTypes = {
        state: PropTypes.object,
        menuRequested: PropTypes.func,
        addedToCart: PropTypes.func,
        RestoService: PropTypes.object,
        menuLoaded: PropTypes.func,
        menuError: PropTypes.func,
        loading: PropTypes.bool,
        err: PropTypes.bool,
        menuItems: PropTypes.array,
        match: PropTypes.object
    };

    componentDidMount() {
        if (this.props.menuItems.length === 0) {
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(err => this.props.menuError(err));
        }
    }

    render() {
        const {menuItems, addedToCart} = this.props;
        const item = menuItems.find(el => +el.id === +this.props.match.params.id);
        const component = (this.props.loading ? <Spinner/> : !item ? <Error/> : undefined);

        if (!item) {
            return (
                <View items={component}/>
            );
        }

        const {title, url, category, price, id} = item;
        const items = <div className="menu__item item_block">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}/>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => addedToCart(id)} className="menu__btn">Add to cart</button>
            <span className = {`menu__category_Img ${category}`}/>
        </div>;

        return (
            <View items={items}/>
        );
    }
}

const View = ({items}) => {
    return (
        <ul className="item_page">
            {items}
        </ul>
    );
};

View.propTypes = {
    items: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        err: state.error
    };
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};

export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));