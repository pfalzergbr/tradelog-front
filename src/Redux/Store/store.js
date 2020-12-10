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
import {requestReducer} from '../Reducers/requestReducer'

const logger = createLogger();

const rootReducer = combineReducers({ authReducer, accountReducer, strategyReducer, requestReducer });

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger)), 
);
