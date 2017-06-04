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
import {loginUser} from "../../actions/auth";
import {clearErrorMessages} from "../../actions/messages";
import AlertDangerMessage from "../alert/AlertDangerMessage";
import {Route} from "react-router-dom";
import Loader from "../elements/Loader";
class Main extends Component {

    render() {

        const {errorMessage, dispatch, isAuthenticated, user, events, servers, isAppFetching} = this.props;
        return <main className="container main">
            {errorMessage &&
            <AlertDangerMessage message={errorMessage} onClose={() => dispatch(clearErrorMessages())}/>
            }
            {!isAuthenticated &&
            <Route exact path="/" render={() => (
                <Index onFormSubmit={creds => dispatch(loginUser(creds))} errorMessage={errorMessage}/>
            )}/>
            }
            { isAppFetching &&
            <Loader/>
            }
            {isAuthenticated &&
            <authenticated>
                <Route exact path="/" render={() => (
                    <Dashboard dispatch={dispatch} user={user} events={events}/>
                )}/>
                <Route exact path="/servers" render={() => (
                    <Servers servers={servers}/>
                )}/>
                <Route exact path="/server/:id" render={(props) => (
                    <Server servers={servers} serverId={props.match.params.id} dispatch={dispatch} />
                )}/>
                <Route exact path="/uptime" render={() => (
                    <Uptime servers={servers}/>
                )}/>
            </authenticated>

            }
        </main>;

    }
}

export default Main;
