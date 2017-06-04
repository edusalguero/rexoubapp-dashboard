"use strict";

/**
 * This is the entry point for the app.
 */

import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import auth from "./reducers/auth";
import user from "./reducers/user";
import messages from "./reducers/messages";
import events from "./reducers/events";
import servers from "./reducers/servers";
import loading from "./reducers/loading";
import App from "./components/layout/App.js";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import api from "./middleware/api";
import {HashRouter as Router} from "react-router-dom";


const loggerMiddleware = createLogger();
const preloadedState = {};

const rexoubadorDashboard = combineReducers({
    auth,
    messages,
    user,
    events,
    servers,
    loading
});
const store = createStore(rexoubadorDashboard, preloadedState,
    applyMiddleware(thunkMiddleware, api, loggerMiddleware));

const root = document.getElementById('app');
ReactDOM.render((
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    ),
    root
);

