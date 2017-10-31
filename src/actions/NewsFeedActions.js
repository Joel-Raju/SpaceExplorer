import { DOMParser } from 'xmldom';
import _ from 'lodash';

import { callXmlApi } from '../utils/ApiUtils';
import {
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILED,
  NEWS_FETCH_LOADING,
} from './types';
import { NEWS_FEED_URL } from '../constants/ApiConstants';


const parseNewsFeed = (textData) => {
  const newsFeedList = [];
  const doc = new DOMParser().parseFromString(textData, 'textxml');
  const items = doc.getElementsByTagName('item');
  _.map(items, item =>
    newsFeedList.push({
      title: item.getElementsByTagName('title')[0].lastChild.data,
      description: item.getElementsByTagName('description')[0].lastChild.data,
      thumbnail: item.getElementsByTagName('enclosure')[0].getAttribute('url'),
      link: item.getElementsByTagName('link')[0].textContent,
      date: item.getElementsByTagName('pubDate')[0].textContent,
    }));
  return newsFeedList;
};

export const toggleNewsLoading = isLoading => ({
  type: NEWS_FETCH_LOADING,
  payload: isLoading,
});

export const fetchNewsFailed = isFailed => ({
  type: NEWS_FETCH_FAILED,
  payload: isFailed,
});

export const fetchNewsFeed = () => {
  return (dispatch) => {
    dispatch(toggleNewsLoading(true));
    dispatch(fetchNewsFailed(false));
    fetch(NEWS_FEED_URL)
      .then(
        response => response.text(),
        error => Promise.reject(error),
      ).then((responseData) => {
        dispatch(toggleNewsLoading(false));
        dispatch({ type: NEWS_FETCH_SUCCESS, payload: parseNewsFeed(responseData) });
      }, () => {
        dispatch(toggleNewsLoading(false));
        dispatch(fetchNewsFailed(true));
      })
      .catch(() => {
        dispatch(toggleNewsLoading(false));
        dispatch(fetchNewsFailed(true));
      });
  };
};

// export const fetchNewsFeed = () => async (dispatch) => {
//   const { error, responseText } = await callXmlApi(NEWS_FEED_URL);
//   if (!error) {
//     dispatch({ type: NEWS_FETCH_SUCCESS, payload: parseNewsFeed(responseText) });
//   }
// };
