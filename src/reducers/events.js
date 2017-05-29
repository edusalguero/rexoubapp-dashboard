import {FETCH_EVENTS_SUCCESS} from "../constants/actionTypes";


const events = (state = {}, action) => {
    switch (action.type) {
        case FETCH_EVENTS_SUCCESS:
            return Object.assign({}, state.events, {
                entries: action.response
            });
        default:
            return state
    }
};


export default events;