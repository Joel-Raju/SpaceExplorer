import { combineReducers } from 'redux';


import NewsFeedReducer from '../reducers/NewsFeedReducer';

const rootReducer = combineReducers({
  nasaNewsFeed: NewsFeedReducer,
});

export default rootReducer;
