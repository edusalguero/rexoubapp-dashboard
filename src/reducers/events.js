import {FETCH_EVENTS_SUCCESS} from "../constants/actionTypes";


const events = (state = {entries: []}, action) => {
    switch (action.type) {
        case FETCH_EVENTS_SUCCESS:
            return Object.assign({}, state.events, {
                entries: action.response,
                date: + new Date()
            });
        default:
            return state
    }
};


export default events;