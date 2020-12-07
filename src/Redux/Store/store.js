import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authReducer } from '../Reducers/authReducer';

const logger = createLogger();

const mainReducer = combineReducers({ authReducer });

export const store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware, logger),
);
