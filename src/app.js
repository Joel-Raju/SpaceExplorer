import React from 'react';
import { Provider } from 'react-redux';


import NewsItem from './components/NewsItem';
import configureStore from './store/configureStore';


const App = () => {
  return (
    <Provider store={configureStore()}>
      <NewsItem
        title="International Space Station Crew Invites Public Along for Photographic Trip Around World"
        imageUrl="https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/bresnik.jpg?itok=wcUPo4G"
      />
    </Provider>
  );
};

export default App;
