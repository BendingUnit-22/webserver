

import createLogger from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import app from './modules/App';


const reducer = combineReducers({
    app
});

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
export default (initialState) => createStoreWithMiddleware(reducer, initialState );
