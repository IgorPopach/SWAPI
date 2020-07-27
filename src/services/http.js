const Methods = {
    GET: 'GET',
    POST: 'POST',
}

export const BASE_URL = 'https://swapi.dev/api/';

export const defaultHeaders = {
    'Content-type': 'application/json; charset=UTF-8',
};

function toQuery(params) {
    const names = params ? Object.keys(params) : [];
    if (names.length) {
        return '?' + names.map((key) => `${key}=${params[key]}`).join('&');
    }
    return '';
}

function parseResponse(response) {
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
        return response.json();
    }
    if (contentType.includes('text/html')) {
        return response.text().then((text) => ({ text }));
    }
    return Promise.reject(new Error(`Can't process this response type: ${contentType}`));
}

function onRequestError(response) {
    const error = new Error(
        JSON.stringify({
            status: response.status,
            message: response.statusText,
        }),
    );
    return Promise.reject(error);
}

function getConfig(method, extras = {}, body) {
    const config = {
        ...extras,
        // headers: Object.assign({}, defaultHeaders, extras.headers),
        method,
    };
    if (body) {
        config.body = JSON.stringify(body);
    }
    return config;
}

function makeRequest(
    method,
    url,
    params,
    body,
    extras,
) {
    const URL = `${url}${toQuery(params)}`;
    const config = getConfig(method, extras, body);
    return fetch(URL, config).then((response) => {
        if (response.ok) {
            return parseResponse(response);
        }
        return onRequestError(response);
    });
}

const service = {
    get: (url, params) => makeRequest(Methods.GET, url, params),
    post: (url, data, params) => makeRequest(Methods.POST, url, params, data),
};

export default service;