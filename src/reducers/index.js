import { combineReducers } from 'redux';

import NewsFeedReducer from './NewsFeedReducer';
import PictureOfDayReducer from './PictureOfDayReducer';

const rootReducer = combineReducers({
  newsFeed: NewsFeedReducer,
  pictureOfDay: PictureOfDayReducer,
});

export default rootReducer;
