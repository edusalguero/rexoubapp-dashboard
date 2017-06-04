import {FETCH_SERVER_SUCCESS, FETCH_SERVERS_SUCCESS} from "../constants/actionTypes";


const servers = (state = {summary: [], full: []}, action) => {
    switch (action.type) {
        case FETCH_SERVERS_SUCCESS:
            return Object.assign({}, state, {
                summary: action.response,
                date: +new Date()
            });
        case FETCH_SERVER_SUCCESS:
            let server = action.response;
            return Object.assign({}, state.full, {
                    full:{
                        [server.id]: {
                            'id': server.id,
                            'data': server,
                            'date': +new Date()
                        }
                    }
                }
            );
        default:
            return state
    }
};


export default servers;