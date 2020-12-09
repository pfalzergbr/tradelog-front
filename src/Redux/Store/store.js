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
import { strategyReducer } from '../Reducers/strategyReducer';

const logger = createLogger();

const mainReducer = combineReducers({ authReducer, accountReducer, strategyReducer });

export const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger)), 
);
