import { STORE_SEARCH } from '../actions/searchActions';

const initialState = {
    search: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case STORE_SEARCH:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    };
};