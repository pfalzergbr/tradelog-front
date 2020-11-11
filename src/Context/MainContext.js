import React, { createContext, useState, useReducer, useCallback } from 'react';
import { tradeReducer } from '../Reducers/tradeReducer'

export const CurrentTradesContext = createContext();
// export const DispatchContext = createContext();
export const AuthContext = createContext();

export const MainContextProvider = (props) => {
    const [currentTrades , dispatchCurrentTrades] = useReducer(tradeReducer, []);
    const [isAuth, setIsAuth] = useState(false); 
    const [userId, setUserId] = useState(null)

    const dispatch = useCallback((action) => {
        dispatchCurrentTrades(action)
    })

    const login = useCallback((userId) => {
        setIsAuth(true);
        setUserId(userId);
    })

    const logout = useCallback(() => {
        setIsAuth(false);
    })

    return ( 
        <CurrentTradesContext.Provider value={{currentTrades, dispatch}}>
            <AuthContext.Provider  value={{isAuth, userId, login, logout}}>
                    {props.children}
            </AuthContext.Provider>
        </CurrentTradesContext.Provider> 
    );
}
 
export default MainContextProvider;