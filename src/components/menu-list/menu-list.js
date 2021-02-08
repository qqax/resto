import React, {Component} from "react";
import MenuListItem from "../menu-list-item";
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded} from "../../actions";
import Spinner from "../spinner";
import PropTypes from "prop-types";

import "./menu-list.scss";

class MenuList extends Component {
    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));
    }

    render() {
        const {menuItems, loading} = this.props;

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
    loading: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    };
};

const mapDispatchToProps = {
    menuLoaded
};

// eslint-disable-next-line babel/new-cap
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));