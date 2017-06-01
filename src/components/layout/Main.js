/**
 * Main
 */
"use strict";

import React, {Component} from "react";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import Servers from "../pages/Servers";
import {loginUser} from "../../actions/auth";
import {clearErrorMessages} from "../../actions/messages";
import AlertDangerMessage from "../alert/AlertDangerMessage";
import {Route} from "react-router-dom";
class Main extends Component {

    render() {

        const {errorMessage, dispatch, isAuthenticated, user, events} = this.props;
        return <main className="container main">
            {errorMessage &&
            <AlertDangerMessage message={errorMessage} onClose={() => dispatch(clearErrorMessages())}/>
            }
            {!isAuthenticated &&
            <Route exact path="/" render={() => (
                <Index onFormSubmit={creds => dispatch(loginUser(creds))} errorMessage={errorMessage}/>
            )}/>
            }
            {isAuthenticated &&
            <authenticated>
                <Route exact path="/" render={() => (
                    <Dashboard dispatch={dispatch} user={user} events={events}/>
                )}/>
                <Route exact path="/servers" render={() => (
                    <Servers/>
                )}/>
            </authenticated>

            }
        </main>;

    }
}

export default Main;