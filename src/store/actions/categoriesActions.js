import http, { BASE_URL } from '../../services/http';
import { storeUrlData } from './urlDataActions';
import setIdentifier from '../../utils/setIdentifier';

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

export const fetchDataEpic = (identifier, params) => dispatch => {
    console.log('fetch', identifier, params);
    http.get(`${BASE_URL}${identifier}/`, params)
        .then(response => {
            const checkedUrlInDataValues = response.results.map(item => {
                for (const key of Object.keys(item)) {
                    if (key !== 'url' && typeof (item[key]) === 'string' && item[key].includes('http:')) {
                        const url = item[key].replace('http:', 'https:');
                        const id = setIdentifier(url);
                        return http.get(url)
                            .then(res => {
                                dispatch(storeUrlData(id, url, res));
                                let response;
                                if (res.name) {
                                    response = res.name;
                                }
                                if (res.title) {
                                    response = res.title;
                                }
                                const newObj = { ...item };
                                newObj[key] = response;
                                return newObj;
                            })
                    }
                }
                return item;
            });
            return Promise.all(checkedUrlInDataValues)
                .then(res => {
                    const data = {
                        ...response,
                        results: res
                    };
                    dispatch(storeData(identifier, data));
                })
                .catch(err => {
                    throw new Error('Something went wrong')
                })
        })
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