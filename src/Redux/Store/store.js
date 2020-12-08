import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../Reducers/authReducer';
import { accountReducer } from '../Reducers/accountReducer';

const logger = createLogger();

const mainReducer = combineReducers({ authReducer, accountReducer });

export const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger)), 
);
