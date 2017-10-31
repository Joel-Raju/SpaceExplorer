import {
  MARS_NEWS_FETCH_SUCCESS,
  MARS_NEWS_FETCH_FAILED,
  MARS_NEWS_FETCH_LOADING,
} from './types';
import { MARS_NEWS_FEED_URL } from '../constants/ApiConstants';
import { callJSONApi } from '../utils/ApiUtils';


export const fetchMarsNewsFailed = isFailed => ({
  type: MARS_NEWS_FETCH_FAILED,
  payload: isFailed,
});

export const toggleMarsNewsLoading = isLoading => ({
  type: MARS_NEWS_FETCH_LOADING,
  payload: isLoading,
});

const parseMarsNewsFeed = (feedData) => {
  const marsNewsFeedList = [];
  feedData.map((feed) => {
    marsNewsFeedList.push({
      newsId: feed.NEWSID,
      title: feed.TITLE,
      description: feed.DESCRIPTION,
      link: feed.LINK,
      thumbnail: feed.THUMB,
      date: feed.POSTED,
    });
    return feed;
  });
  return marsNewsFeedList;
};

export const fetchMarsNewsFeed = () => async (dispatch) => {
  dispatch(toggleMarsNewsLoading(true));
  dispatch(fetchMarsNewsFailed(false));
  const { error, json } = await callJSONApi(MARS_NEWS_FEED_URL);
  if (error) {
    dispatch(toggleMarsNewsLoading(false));
    dispatch(fetchMarsNewsFailed(true));
    return;
  }
  dispatch({ type: MARS_NEWS_FETCH_SUCCESS, payload: parseMarsNewsFeed(json.newsitem) });
};
