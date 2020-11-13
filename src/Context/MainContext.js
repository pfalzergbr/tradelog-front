import React, { createContext, useState, useReducer, useCallback, useEffect } from 'react';
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

//Handle login. Setting Username and User ID with a token, then sends it to local storage for persistance. 
//TODO - Implement cookie logic for more security. 
//TODO - Implement timeout logic
//TODO - Extract auth logic into a custom hook.
    const login = useCallback((user, token) => {
        setToken(token);
        setUser(user);
        localStorage.setItem('userData', JSON.stringify({user, token}))
    }, [])

    // Handle logout. Clears tokens, user data and local storage. 
    const logout = useCallback(() => {
        setToken(null);
        setUser(null)
        localStorage.removeItem('userData');
    }, [])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData && userData.user &&userData.token){
            login(userData.user, userData.token)
        }
    }, [login])

    return ( 
        <CurrentTradesContext.Provider value={{currentTrades, dispatch}}>
            <AuthContext.Provider  value={{isAuth:!!token, token, user, login, logout}}>
                    {props.children}
            </AuthContext.Provider>
        </CurrentTradesContext.Provider> 
    );
}
 
export default MainContextProvider;