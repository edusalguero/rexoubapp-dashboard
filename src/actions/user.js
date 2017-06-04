// The middleware to call the API for data
import {CALL_API} from "../middleware/api";

import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../constants/actionTypes";
import {USER_DATA_TTL} from "../constants/app";
import {isTimeout} from "../helpers/dataLifetime";

const fetchUser = () => ({
    [CALL_API]: {
        endpoint: 'users/self',
        method: 'GET',
        authenticated: true,
        types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE]
    }
});

// Fetches user data from API unless it is cached and not timeout
export const loadUser = ()  => (dispatch, getState) => {
    const {user} =  getState();
    const {date} =  user;

    if(!isTimeout(date, USER_DATA_TTL))
    {
        return null;
    }
    return dispatch(fetchUser());
};
