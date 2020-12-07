import {
    createStore,
    applyMiddleWare,
    combineReducer,
    createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authReducer } from '../Reducers/authReducer';

const logger = createLogger();

const mainReducer = combineReducer({ authReducer });

const store = createStore(
    mainReducer,
    applyMiddleWare(thunkMiddleware, logger),
);

export default store;
