// The middleware to call the API for data
import {CALL_API} from "../middleware/api";

import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../constants/actionTypes";


// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
const fetchUser = () => ({
    [CALL_API]: {
        endpoint: 'users/self',
        method: 'GET',
        authenticated: true,
        types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE]
    }
});

export function fetchUserInfo() {
    return dispatch => {
        dispatch(fetchUser());
    }
}