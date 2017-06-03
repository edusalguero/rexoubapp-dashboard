/**
 * Application component
 *
 * This is the parent component for all routes in the application. It displays
 * the header and wraps the content of the current route in a container div.
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {} from 'bootstrap/dist/css/bootstrap.css';
import {} from '../../css/app.css';
import {} from 'font-awesome/css/font-awesome.css';

import Main from "./Main";
import {withRouter} from "react-router-dom";

class App extends React.Component {
    render() {
        const {dispatch, isAuthenticated, errorMessage, user, events, servers} = this.props;
        return <div>
            <Header isAuthenticated={isAuthenticated} user={user} dispatch={dispatch}/>
            <Main errorMessage={errorMessage} dispatch={dispatch} isAuthenticated={isAuthenticated}
                  user={user} events={events} servers={servers}/>
            <Footer />
        </div>;

    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isAppFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {auth, messages, user, events, servers } = state;
    const {isAuthenticated, isFetching} = auth;
    const {errorMessage} = messages;
    const isAppFetching = isFetching;
    return {
        isAuthenticated,
        errorMessage,
        isAppFetching,
        user,
        events,
        servers
    }
};

export default withRouter(connect(mapStateToProps)(App))