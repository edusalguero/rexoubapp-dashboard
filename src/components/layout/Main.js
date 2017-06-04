/**
 * Main
 */
"use strict";

import React, {Component} from "react";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import Servers from "../pages/Servers";
import Server from "../pages/Server";
import Uptime from "../pages/Uptime";
import AlertDangerMessage from "../alert/AlertDangerMessage";
import {Redirect, Route, Switch} from "react-router-dom";
import Loader from "../elements/Loader";
import PropTypes from "prop-types";
import NotFound from "../pages/NotFound";

class Main extends Component {

    componentWillMount() {
        const {isAuthenticated, loadUser} = this.props;
        if(isAuthenticated)
        {
            loadUser();
        }
    }
    render() {

        const {errorMessage,
            clearErrorMessages,
            loginUser,
            isAuthenticated,
            loadEvents,
            loadUser,
            loadServers,
            loadServer,
            user,
            events,
            servers,
            isAppFetching} = this.props;
        return <main className="container main">
            {errorMessage &&
            <AlertDangerMessage message={errorMessage} onClose={() => clearErrorMessages()}/>
            }
            {!isAuthenticated &&
            <notAuthenticated>
                <Route path="/" render={() => (
                    <Index onFormSubmit={creds => loginUser(creds)} errorMessage={errorMessage}/>
                )}/>
                <Route path="*" render={() => (<Redirect to="/"/>)}/>
            </notAuthenticated>
            }
            { isAppFetching &&
            <Loader/>
            }
            {isAuthenticated &&
            <authenticated>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Dashboard user={user}
                                   events={events}
                                   loadEvents={loadEvents}
                                   loadServers={loadServers}
                                   loadUser={loadUser}/>
                    )}/>
                    <Route exact path="/servers" render={() => (
                        <Servers servers={servers} loadServers={loadServers}/>
                    )}/>
                    <Route exact path="/server/:id" render={(props) => (
                        <Server isAppFetching={isAppFetching} servers={servers} serverId={props.match.params.id}
                                loadServer={loadServer}/>
                    )}/>
                    <Route exact path="/uptime" render={() => (
                        <Uptime servers={servers} loadServers={loadServers}/>
                    )}/>
                    <Route component={NotFound}/>
                </Switch>
            </authenticated>

            }

        </main>;

    }
}

Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isAppFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    servers: PropTypes.object.isRequired,
    clearErrorMessages: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadEvents: PropTypes.func.isRequired,
    loadServers: PropTypes.func.isRequired,
    loadServer: PropTypes.func.isRequired
};
export default Main;
