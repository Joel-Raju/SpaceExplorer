import {
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILED,
  NEWS_FETCH_LOADING,
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS:
      return action.payload;
    case NEWS_FETCH_FAILED:
      return state;
    case NEWS_FETCH_LOADING:
      return state;
    default:
      return state;
  }
};
