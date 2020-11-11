import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { MainContextProvider } from './Context/MainContext';
import AppRouter from './Routers/AppRouter';

const App = () => {
    return (
        <MainContextProvider>
            <ToastContainer />
            <AppRouter />
        </MainContextProvider>
    );
};

export default App;
