import React, {Component} from "react";
import MenuListItem from "../menu-list-item";
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError} from "../../actions";
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
        const {menuItems, loading, err} = this.props;

        if (err) {
            return <Error/>;
        }

        if (loading) {
            return <Spinner/>;
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>;
                    })
                }
            </ul>
        );
    }
}

MenuList.propTypes = {
    menuItems: PropTypes.array,
    RestoService: PropTypes.object,
    menuLoaded: PropTypes.func,
    menuRequested: PropTypes.func,
    menuError: PropTypes.func,
    loading: PropTypes.bool,
    err: PropTypes.bool
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
    menuError
};

// eslint-disable-next-line babel/new-cap
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));