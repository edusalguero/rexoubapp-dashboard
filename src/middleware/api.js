const BASE_URL = 'http://localhost:8080/v1/';

export function authenticate(username, password) {
    const url = BASE_URL + 'auth/login';
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${username}&password=${password}`
    };

    return fetch(url, config);
}

function callApi(endpoint, method, authenticated) {

    let token = localStorage.getItem('token') || null;
    let config = {method: 'GET', mode: 'cors'};

    if (authenticated) {
        if (token) {
            config = Object.assign({}, config.headers, {
                headers: {'Authorization': `Bearer ${token}`}
            });

        } else {
            throw "No token saved!"
        }
    }

    return fetch(BASE_URL + endpoint, config)
        .then(response =>
            response.json()
                .then(text => ({text, response}))
        ).then(({text, response}) => {
            if (!response.ok) {
                return Promise.reject(text)
            }

            return text
        }).catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {

    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {endpoint, method, types, authenticated} = callAPI;

    const [requestType, successType, errorType] = types;

    next({
        authenticated,
        type: requestType
    });
    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
    return callApi(endpoint, method, authenticated).then(
        response =>
            next({
                response,
                authenticated,
                type: successType
            }),
        error => next({
            error: error.message || 'There was an error.',
            type: errorType
        })
    )
}