import React, {Component} from "react";
import {connect} from "react-redux";
import withRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError} from "../../actions";
import "./itemPage.css";
import PropTypes from "prop-types";
import Spinner from "../spinner";
import Error from "../error";

class ItemPage extends Component {
    static propTypes = {
        state: PropTypes.object,
        menuRequested: PropTypes.func,
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
        const {menuItems} = this.props;
        console.log(this.props);
        if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            );
        }

        const item = menuItems.find(el => +el.id === +this.props.match.params.id);

        if (!item) {
            return (
                <div className = "item_page">
                    <Error/>
                </div>
            );
        }

        const {title, url, category, price} = item;

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}/>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}/>
                </div>
            </div>
        );
    }
}

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
    menuError
};

export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));