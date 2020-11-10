import React, { createContext, useContext, useReducer } from 'react';
import AuthContext from '../Context/AuthContext'

export const CurrentTradesContext = createContext();
export const DispatchContext = createContext();

const MainContextProvider = (props) => {
    const [currentTrades , dispatchCurrentTrades] = useReducer(tradeReducer, []);

    return ( 
        <CurrentTradesContext.Provider value={currentTrades}>
            <AuthContext.Provider>
                <DispatchContext.Provider value={dispatchCurrentTrades}>
                    {props.children}
                </DispatchContext.Provider>
            </AuthContext.Provider>
        </CurrentTradesContext.Provider> 
    );
}
 
export default MainContextProvider;