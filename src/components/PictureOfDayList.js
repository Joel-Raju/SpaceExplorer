import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { fetchPictureOfDay } from '../actions/PictureOfDayActions';


class PictureOfDayList extends Component {
  componentWillMount() {
    this.props.fetchPictureOfDay();
  }

  createDataSource() {

  }

  render() {
    return (
      <FlatList />
    );
  }
}

const mapStateToProps = (state) => {
  const { picturesFeed, isPicturesFeedsLoading, picturesFeedFetchFailed } = state.picturesFeed;
  return { picturesFeed, isPicturesFeedsLoading, picturesFeedFetchFailed };
};

export default connect(mapStateToProps, { fetchPictureOfDay })(PictureOfDayList);
