import React, { createContext, useState, useReducer, useCallback } from 'react';
import { tradeReducer } from '../Reducers/tradeReducer'

export const CurrentTradesContext = createContext();
// export const DispatchContext = createContext();
export const AuthContext = createContext();

export const MainContextProvider = (props) => {
    const [currentTrades , dispatchCurrentTrades] = useReducer(tradeReducer, []);
    const [token, setToken] = useState(false); 
    const [user, setUser] = useState(null)

    const dispatch = useCallback((action) => {
        dispatchCurrentTrades(action)
    })

    const login = useCallback((user, token) => {
        setToken(token);
        setUser(user);
        console.log('Auth set', token, user)
    })

    const logout = useCallback(() => {
        setToken(null);
        setUser(null)
    })

    return ( 
        <CurrentTradesContext.Provider value={{currentTrades, dispatch}}>
            <AuthContext.Provider  value={{isAuth:!!token, token, user, login, logout}}>
                    {props.children}
            </AuthContext.Provider>
        </CurrentTradesContext.Provider> 
    );
}
 
export default MainContextProvider;