// The middleware to call the API for data
import {CALL_API} from "../middleware/api";

import {
    FETCH_SERVERS_REQUEST, FETCH_SERVERS_SUCCESS, FETCH_SERVERS_FAILURE,
    FETCH_SERVER_REQUEST, FETCH_SERVER_SUCCESS, FETCH_SERVER_FAILURE
} from "../constants/actionTypes";


const fetchServers = () => ({
    [CALL_API]: {
        endpoint: 'servers',
        method: 'GET',
        authenticated: true,
        types: [FETCH_SERVERS_REQUEST, FETCH_SERVERS_SUCCESS, FETCH_SERVERS_FAILURE]
    }
});

const fetchServer = (id) => ({
    [CALL_API]: {
        endpoint: 'servers/'+id,
        method: 'GET',
        authenticated: true,
        types: [FETCH_SERVER_REQUEST, FETCH_SERVER_SUCCESS, FETCH_SERVER_FAILURE]
    }
});


export function fetchUserServers() {
    return dispatch => {
        dispatch(fetchServers());
    }
}

export function fetchUserServer(id) {
    return dispatch => {
        dispatch(fetchServer(id));
    }
}