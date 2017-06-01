import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../constants/actionTypes";

import {authenticate} from "../middleware/api";

import {pushError} from "./messages";
/*
 * action creators
 */

function requestLogin(credenditals) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        credenditals
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token,
    }
}

function loginError() {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(credenditals) {

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(credenditals));
        return authenticate(credenditals.username, credenditals.password)
            .then(response =>
                response.json()
                    .then(user => ({user, response}))
            ).then(({user, response}) => {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(pushError(user.message));
                    dispatch(loginError());
                    return Promise.reject(user)
                }
                else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('token', user.token);
                    // Dispatch the success action
                    dispatch(receiveLogin(user))
                }
            }).catch(err => {
                dispatch(pushError(err.message));
                dispatch(loginError());
                console.log("Error: ", err)
            })
    }
}

// Logs the user out
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('token');
        dispatch(receiveLogout());
    }
}