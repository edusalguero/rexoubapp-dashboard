import {
    MESSAGES_CLEAR_ERROR,
    MESSAGES_PUSH_ERROR
} from "../constants/actionTypes";
/*
 * action creators
 */

function clearError() {
    return {
        type: MESSAGES_CLEAR_ERROR,
        errorMessage: ''
    }
}

function setError(message) {
    return {
        type: MESSAGES_PUSH_ERROR,
        errorMessage: message
    }
}


// Clear error messages
export function clearErrorMessages() {
    return dispatch => {
        dispatch(clearError());
    }
}
// Push error messages
export function pushError(message) {
    return dispatch => {
        dispatch(setError(message));
    }
}