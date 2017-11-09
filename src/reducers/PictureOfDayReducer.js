import {
  PICTURE_OF_DAY_FETCH_SUCCESS,
  PICTURE_OF_DAY_FETCH_FAILED,
  PICTURE_OF_DAY_FETCH_LOADING,
} from '../actions/types';


const INITIAL_STATE = {
  picturesFeed: null,
  isPicturesFeedsLoading: false,
  picturesFeedFetchFailed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PICTURE_OF_DAY_FETCH_SUCCESS:
      return { ...state, picturesFeed: action.payload };
    case PICTURE_OF_DAY_FETCH_LOADING:
      return { ...state, isPicturesFeedsLoading: action.payload };
    case PICTURE_OF_DAY_FETCH_FAILED:
      return { ...state, picturesFeedFetchFailed: action.payload };
    default:
      return state;
  }
};
