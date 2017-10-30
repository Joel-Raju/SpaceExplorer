import { DOMParser } from 'xmldom';
import _ from 'lodash';

import { callXmlApi } from '../utils/ApiUtils';
import { PICTURE_OF_DAY_SUCCESS } from './types';
import { PICTURE_OF_DAY_URL } from '../constants/ApiConstants';

export const fetchPictureOfDay = () => {
  return (dispatch) => {
    fetch(PICTURE_OF_DAY_URL)
      .then(response => response.text())
      .then((responseData) => {
        dispatch({ type: PICTURE_OF_DAY_SUCCESS, payload: responseData });
      });
  };
};

export const fetchPictureOfDayLoading = () => {};

export const fetchPictureOfDayFailed = () => {};
