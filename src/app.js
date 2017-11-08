import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './components/AppNavigation';
import configureStore from './store/configureStore';


const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
