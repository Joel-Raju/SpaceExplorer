import { combineReducers } from 'redux';


import NewsFeedReducer from '../reducers/NewsFeedReducer';

const rootReducer = combineReducers({
  newsFeed: NewsFeedReducer,
});

export default rootReducer;
