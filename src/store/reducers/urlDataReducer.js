import { STORE_URL_DATA } from '../actions/urlDataActions';

const initialState = {
    people: {},
    planets: {},
    films: {},
    species: {},
    vehicles: {},
    starships: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case STORE_URL_DATA:
            const { category, id, data } = payload;
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [id]: data
                },
            }
        default:
            return state;
    };
};

