import React, {Component} from "react";
import MenuListItem from "../menu-list-item";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./menu-list.scss";

class MenuList extends Component {

    render() {
        const {menuItems} = this.props;

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
    menuItems: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu
    };
};

export default connect(mapStateToProps)(MenuList);