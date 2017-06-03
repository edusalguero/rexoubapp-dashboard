/*
 * action types
 */

// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage.
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


export const MESSAGES_CLEAR_ERROR = 'MESSAGES_CLEAR_ERROR';
export const MESSAGES_PUSH_ERROR = 'MESSAGES_PUSH_ERROR';


export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';


export const FETCH_SERVERS_REQUEST = 'FETCH_SERVERS_REQUEST';
export const FETCH_SERVERS_SUCCESS = 'FETCH_SERVERS_SUCCESS';
export const FETCH_SERVERS_FAILURE = 'FETCH_SERVERS_FAILURE';

export const FETCH_SERVER_REQUEST = 'FETCH_SERVER_REQUEST';
export const FETCH_SERVER_SUCCESS = 'FETCH_SERVER_SUCCESS';
export const FETCH_SERVER_FAILURE = 'FETCH_SERVER_FAILURE';