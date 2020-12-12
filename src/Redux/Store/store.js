import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth } from '../Reducers/auth';
import { account } from '../Reducers/account';
import { strategy } from '../Reducers/strategy';
import { control } from '../Reducers/control'

// const logger = createLogger();

const rootReducer = combineReducers({ auth, account, strategy, control });

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware /*, logger*/)), 
);
