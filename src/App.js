import React from 'react';
import { MainContextProvider} from './Context/MainContext'
import AppRouter from './Routers/AppRouter'

const App = () => {

    return (
        <MainContextProvider>
            <AppRouter />
        </MainContextProvider>
    );
};

export default App;
