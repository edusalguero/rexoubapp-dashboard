import {FETCH_USER_SUCCESS} from "../constants/actionTypes";


const user = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state.user,
                action.response
            );
        default:
            return state
    }
};


export default user;