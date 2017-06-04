const loading = (state = {
                     requests: 0
                 }, action) => {

    const type = action.type;

    if (typeof type === 'string') {
        const isFetchRequest = new RegExp(/FETCH_[A-Za-z0-9]*_REQUEST/);
        const isFetch = new RegExp(/^FETCH_/);
        const notRequest = new RegExp(/_REQUEST$/);
        if (isFetchRequest.test(type)) {
            state = Object.assign({}, state.requests, {
                requests: (state.requests + 1)
            });
        } else if (isFetch.test(type) && !notRequest.test(type)) {
            state = Object.assign({}, state.requests, {
                requests: (state.requests - 1)
            });
        }

    }

    return state;
};

export default loading;
