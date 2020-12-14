import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { store } from "./Redux/Store/store";
import { Provider } from 'react-redux';
import ModalController from './Pages/Shared/ModalController'
import AppRouter from './Routers/AppRouter';

const App = () => {
    return (
        //TODO - Remove contextprovider when ready
        <Provider store={store}>
            <ToastContainer />
            <ModalController/>
            <AppRouter />
        </Provider>
    );
};

export default App;
