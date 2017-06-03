import {FETCH_SERVER_SUCCESS, FETCH_SERVERS_SUCCESS} from "../constants/actionTypes";


const servers = (state = {list: [],items:[]}, action) => {
    switch (action.type) {
        case FETCH_SERVERS_SUCCESS:
            return Object.assign({}, state, {
                list: action.response
            });
        case FETCH_SERVER_SUCCESS:
            // TODO check if server exist in items array
            console.log(state);
            let items = state.items;
            items.push(action.response);
            return Object.assign({}, state, {
                items: items
            });
        default:
            return state
    }
};


export default servers;