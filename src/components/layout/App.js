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

import {loadUser} from "../../actions/user";
import {loadEvents} from "../../actions/events";
import {loadServer, loadServers} from "../../actions/servers";
import {loginUser, logoutUser} from "../../actions/auth";
import {clearErrorMessages} from "../../actions/messages";


class App extends React.Component {
    render() {
        const {
            logoutUser,
            loginUser,
            loadServer,
            loadServers,
            loadUser,
            loadEvents,
            clearErrorMessages,
            isAuthenticated,
            errorMessage,
            user,
            events,
            servers,
            isAppFetching} = this.props;
        return <div>
            <Header isAuthenticated={isAuthenticated} user={user.data} logoutUser={logoutUser}/>
            <Main errorMessage={errorMessage}
                  loadServers={loadServers}
                  loadServer={loadServer}
                  loadUser={loadUser}
                  loadEvents={loadEvents}
                  loginUser={loginUser}
                  isAuthenticated={isAuthenticated}
                  clearErrorMessages={clearErrorMessages}
                  user={user}
                  events={events}
                  servers={servers}
                  isAppFetching={isAppFetching}/>
            <Footer />
        </div>;

    }
}

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isAppFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    servers: PropTypes.object.isRequired,
    loginUser:PropTypes.func.isRequired,
    logoutUser:PropTypes.func.isRequired,
    loadUser:PropTypes.func.isRequired,
    loadEvents:PropTypes.func.isRequired,
    loadServers:PropTypes.func.isRequired,
    loadServer:PropTypes.func.isRequired,
    clearErrorMessages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const {auth, messages, user, events, servers, loading} = state;
    const {isAuthenticated} = auth;
    const {errorMessage} = messages;
    const isAppFetching = loading.requests > 0;
    return {
        isAuthenticated,
        errorMessage,
        isAppFetching,
        user,
        events,
        servers
    }
};

export default withRouter(connect(mapStateToProps,{
    loadUser,
    loadEvents,
    loadServers,
    loadServer,
    logoutUser,
    loginUser,
    clearErrorMessages
})(App))