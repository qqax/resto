import React, {Component} from "react";
import MenuListItem from "../menu-list-item";
import {connect} from "react-redux";
import withRestoService from "../hoc/with-resto-service";
import {menuLoaded, menuRequested, menuError, addedToCart} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";
import PropTypes from "prop-types";
import "./menu-list.scss";

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(err => this.props.menuError(err));
    }

    render() {
        const {menuItems, loading, err, addedToCart} = this.props;
        const component = (err ? <Error/> : loading ? <Spinner/> : undefined);

        if (component) {
            return (
                <div className="item_page">
                    {component}
                </div>
            );
        }

        const items = menuItems.map(menuItem => {
            return (
                <MenuListItem
                    key={menuItem.id}
                    menuItem={menuItem}
                    onAddToCart={() => addedToCart(menuItem.id)}/>
                );
        });

        return (
            <View items={items}/>
        );
    }
}

MenuList.propTypes = {
    menuItems: PropTypes.array,
    RestoService: PropTypes.object,
    menuLoaded: PropTypes.func,
    menuRequested: PropTypes.func,
    menuError: PropTypes.func,
    addedToCart: PropTypes.func,
    loading: PropTypes.bool,
    err: PropTypes.bool
};

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    );
};

View.propTypes = {
    items: PropTypes.array
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

export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));