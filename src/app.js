import React from 'react';
import { Provider } from 'react-redux';

import NewsFeed from './components/NewsFeed';
import configureStore from './store/configureStore';


const App = () => {
  return (
    <Provider store={configureStore()}>
      <NewsFeed />
    </Provider>
  );
};

export default App;
