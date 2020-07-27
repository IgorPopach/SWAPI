import { STORE_CATEGORIES, STORE_DATA, STORE_LINK_DATA } from '../actions/categoriesActions';

const initialState = {
    categories: null,
    data: null,
    linksData: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case STORE_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case STORE_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.category]: payload.data
                }
            };
        case STORE_LINK_DATA:
            return {
                ...state,
                linksData: {
                    ...state.linksData,
                    [payload.category]: payload.data
                }
            }
        default:
            return state;
    };
};