import {
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILED,
  NEWS_FETCH_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
  feeds: null,
  feedsFetchFailed: false,
  isFeedsLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS:
      return { ...state, feeds: action.payload };
    case NEWS_FETCH_FAILED:
      return { ...state, feedsFetchFailed: action.payload };
    case NEWS_FETCH_LOADING:
      return { ...state, isFeedsLoading: action.payload };
    default:
      return state;
  }
};
