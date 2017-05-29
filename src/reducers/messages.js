import {MESSAGES_CLEAR_ERROR, MESSAGES_PUSH_ERROR} from "../constants/actionTypes";


const messages = (state = {errorMessage: ''}, action) => {
    switch (action.type) {
        case MESSAGES_CLEAR_ERROR:
            return Object.assign({}, state, {
                errorMessage: ''
            });
        case MESSAGES_PUSH_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
};


export default messages;
