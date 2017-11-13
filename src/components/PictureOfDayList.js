import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import PictureFeedItem from './PictureFeedItem';
import { fetchPictureOfDay } from '../actions';


class PictureOfDayList extends Component {
  componentWillMount() {
    this.props.fetchPictureOfDay();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ picturesFeed }) {
    this.dataSource = picturesFeed;
  }

  renderItem = ({ item }) => {
    return (
      <PictureFeedItem
        pictureFeedItem={item}
        navigation={this.props.navigation}
      />
    );
  }

  renderLoadingOrError() {
    const { picturesFeedFetchFailed, isPicturesFeedsLoading } = this.props;
    if (picturesFeedFetchFailed) {
      return (
        <Text>There was a problem fetching NASA Pictures Feed</Text>
      );
    } else if (isPicturesFeedsLoading) {
      return (
        <Text>your feed is loading</Text>
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
        {this.renderLoadingOrError()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { picturesFeed, isPicturesFeedsLoading, picturesFeedFetchFailed } = state.picturesFeed;
  return { picturesFeed, isPicturesFeedsLoading, picturesFeedFetchFailed };
};

export default connect(mapStateToProps, { fetchPictureOfDay })(PictureOfDayList);
