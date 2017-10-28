import React from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';
import NewsItem from './components/NewsItem';

const App = () => {
  return (
    <NewsItem
      title="International Space Station Crew Invites Public Along for Photographic Trip Around World"
      imageUrl="https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/bresnik.jpg?itok=wcUPo4G"
    />
  );
};

export default App;
