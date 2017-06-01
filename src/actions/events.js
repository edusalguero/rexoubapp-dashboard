// The middleware to call the API for data
import {CALL_API} from "../middleware/api";

import {FETCH_EVENTS_FAILURE, FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS} from "../constants/actionTypes";


// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
const fetchEvents = () => ({
    [CALL_API]: {
        endpoint: 'events?days=7',
        method: 'GET',
        authenticated: true,
        types: [FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE]
    }
});

export function fetchUserEvents() {
    return dispatch => {
        dispatch(fetchEvents());
    }
}