import http, { BASE_URL } from '../../services/http';

export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const STORE_DATA = 'STORE_DATA';
export const STORE_LINK_DATA = 'STORE_LINK_DATA';

const storeCategories = (data) => ({
    type: STORE_CATEGORIES,
    payload: data
});

const storeData = (category, data) => ({
    type: STORE_DATA,
    payload: {
        category,
        data
    }
});

const storeLinkData = (category, data) => ({
    type: STORE_LINK_DATA,
    payload: {
        category,
        data
    }
});

export const fetchCategoriesEpic = () => dispatch => {
    http.get(BASE_URL)
        .then(res => {
            dispatch(storeCategories(res))
        })
        .catch(err => {
            throw new Error('Something went wrong')
        }
        );
};

export const fetchDataEpic = (identifier, params) => async dispatch => {
    // let params;
    // if (search) {
    //     params = { search }
    // };
    try {
        const response = await http.get(`${BASE_URL}${identifier}/`, params);
        dispatch(storeData(identifier, response))
    } catch (err) {
        throw new Error('Something went wrong')
    }
};

export const fetchLinksDataEpic = (identifier, urls) => async dispatch => {
    let data = [];
    for (const url of urls) {
        const res = await http.get(url);
        data.push(res);
    }
    dispatch(storeLinkData(identifier, data));
    return data;
}