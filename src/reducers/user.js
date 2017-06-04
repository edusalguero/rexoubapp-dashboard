import {FETCH_USER_SUCCESS} from "../constants/actionTypes";


const user = (state = {data:{},date:null}, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state.user, {
                data: action.response,
                date: + new Date()
            });
        default:
            return state
    }
};


export default user;