import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { store } from './Redux/Store/store';
import { Provider } from 'react-redux';


import AppContainer from './AppContainer'

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
