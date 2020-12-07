import {
    createStore,
    applyMiddleWare,
    combineReducers,
    createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authReducer } from '../Reducers/authReducer';

const logger = createLogger();

const mainReducer = combineReducers({ authReducer });

const store = createStore(
    mainReducer,
    applyMiddleWare(thunkMiddleware, logger),
);

export default store;
