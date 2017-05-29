"use strict";

/**
 * This is the entry point for the app.
 */

import React from "react";
import ReactDOM from "react-dom";
import {hashHistory, Redirect, Route, Router} from "react-router";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import auth from "./reducers/auth";
import user from "./reducers/user";
import messages from "./reducers/messages";
import events from "./reducers/events";
import App from "./components/layout/App.js";
import ServersPage from "./components/pages/ServersPage";

import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import api from "./middleware/api";

const loggerMiddleware = createLogger();
const preloadedState = {
    events:
        {
            entries:[]
        }
};

const rexobadorDashboard = combineReducers({
    auth,
    messages,
    user,
    events
});
const store = createStore(rexobadorDashboard, preloadedState,
    applyMiddleware(thunkMiddleware, api, loggerMiddleware));

const root = document.getElementById('app');
ReactDOM.render((
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Redirect from="*" to="/"/>
                </Route>
            </Router>
        </Provider>),
    root
);

