// The middleware to call the API for data
import {CALL_API} from "../middleware/api";

import {
    FETCH_SERVERS_REQUEST, FETCH_SERVERS_SUCCESS, FETCH_SERVERS_FAILURE,
    FETCH_SERVER_REQUEST, FETCH_SERVER_SUCCESS, FETCH_SERVER_FAILURE
} from "../constants/actionTypes";
import {isTimeout} from "../helpers/dataLifetime";
import {SERVERS_DATA_TTL} from "../constants/app";


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


// Fetches servers data from API unless it is cached and not timeout
export const loadServers = ()  => (dispatch, getState) => {
    const {servers} =  getState();
    const {date} =  servers;

    if(!isTimeout(date, SERVERS_DATA_TTL))
    {
        return null;
    }
    return dispatch(fetchServers());
};


export const loadServer = (serverId)  => (dispatch, getState) => {

    const {servers} =  getState();
    const {full} = servers;

    const server = full[serverId];
    if(server!== undefined
        && server.date!==undefined
        && !isTimeout(server.date, SERVERS_DATA_TTL))
    {
        return null;
    }

    return dispatch(fetchServer(serverId));
};

