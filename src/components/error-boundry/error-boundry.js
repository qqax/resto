import React, {Component} from "react";
import Error from "../error";
import PropTypes from "prop-types";

export default class ErrorBoundry extends Component {

    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        console.log(`${error}: ${errorInfo}`);
        this.setState({error: true});
    }

    render() {
       if (this.state.error) {
           return <Error/>;
       }

       return this.props.children;
    }
}

ErrorBoundry.propTypes = {
    children: PropTypes.object
};