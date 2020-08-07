export const STORE_URL_DATA = 'STORE_URL_DATA';

export const storeUrlData = (category, id, data) => ({
    type: STORE_URL_DATA,
    payload: {
        category,
        id,
        data
    }
});