import { combineReducers } from 'redux';

import NewsFeedReducer from './NewsFeedReducer';
import MarsFeedReducer from './MarsFeedReducer';
import PictureOfDayReducer from './PictureOfDayReducer';


const rootReducer = combineReducers({
  newsFeed: NewsFeedReducer,
  marsFeed: MarsFeedReducer,
  pictureOfDay: PictureOfDayReducer,
});

export default rootReducer;
