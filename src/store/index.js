import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './reducers/categoriesReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    search: searchReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;