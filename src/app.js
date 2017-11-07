import React from 'react';
import { Provider } from 'react-redux';

import RootNavigationTabs from './components/RootNavigationTabs';
import configureStore from './store/configureStore';


const App = () => {
  return (
    <Provider store={configureStore()}>
      <RootNavigationTabs />
    </Provider>
  );
};

export default App;
