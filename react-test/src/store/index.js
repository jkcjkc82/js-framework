import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {auth, dropbox} from './reducer'

const AppReducer = combineReducers({
    auth, 
    dropbox
});

const store = createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);

export default store;
