import { DOMParser } from 'xmldom';
import _ from 'lodash';

import { callXMLApi } from '../utils/ApiUtils';
import {
  PICTURE_OF_DAY_FETCH_SUCCESS,
  PICTURE_OF_DAY_FETCH_FAILED,
  PICTURE_OF_DAY_FETCH_LOADING,
} from './types';
import { PICTURE_OF_DAY_URL } from '../constants/ApiConstants';


const parsePictureOfDay = (textData) => {
  const pictureFeedList = [];
  const doc = new DOMParser().parseFromString(textData, 'textxml');
  const items = doc.getElementsByTagName('item');
  _.map(items, item =>
    pictureFeedList.push({
      title: item.getElementsByTagName('title')[0].lastChild.data,
      description: item.getElementsByTagName('description')[0].lastChild.data,
      thumbnail: item.getElementsByTagName('enclosure')[0].getAttribute('url'),
      link: item.getElementsByTagName('link')[0].textContent,
      date: item.getElementsByTagName('pubDate')[0].textContent,
    }));
  return pictureFeedList;
};

export const fetchPictureOfDayLoading = isLoading => ({
  type: PICTURE_OF_DAY_FETCH_LOADING,
  payload: isLoading,
});

export const fetchPictureOfDayFailed = isFailed => ({
  type: PICTURE_OF_DAY_FETCH_FAILED,
  payload: isFailed,
});

export const fetchPictureOfDay = () => async (dispatch) => {
  fetchPictureOfDayLoading(true);
  fetchPictureOfDayFailed(false);
  const { error, response } = await callXMLApi(PICTURE_OF_DAY_URL);
  fetchPictureOfDayLoading(false);
  if (error) {
    fetchPictureOfDayFailed(true);
    return;
  }
  dispatch({ type: PICTURE_OF_DAY_FETCH_SUCCESS, payload: parsePictureOfDay(response) });
};
