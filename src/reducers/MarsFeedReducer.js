import {
  MARS_NEWS_FETCH_SUCCESS,
  MARS_NEWS_FETCH_FAILED,
  MARS_NEWS_FETCH_LOADING,
} from '../actions/types';


const INITIAL_STATE = {
  marsFeed: null,
  marsFeedFetchFailed: false,
  isMarsFeedsLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MARS_NEWS_FETCH_SUCCESS:
      return { ...state, marsFeed: action.payload };
    case MARS_NEWS_FETCH_FAILED:
      return { ...state, marsFeedFetchFailed: action.payload };
    case MARS_NEWS_FETCH_LOADING:
      return { ...state, isMarsFeedsLoading: action.payload };
    default:
      return state;
  }
};
