import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { fetchMarsNewsFeed } from '../actions';
import NewsItem from './NewsItem';


class MarsNewsFeed extends Component {
  componentWillMount() {
    this.props.fetchMarsNewsFeed();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ marsFeed }) {
    this.dataSource = marsFeed;
  }

  renderItem = ({ item }) => {
    return (<NewsItem
      newsItem={item}
      navigation={this.props.navigation}
    />);
  };

  renderLoadingOrError = () => {
    if (this.props.feedsFetchFailed) {
      return (
        <Text>There was a problem fetching NASA Mars News Feeds.</Text>
      );
    } else if (this.props.isFeedsLoading) {
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
  const { marsFeed, marsFeedFetchFailed, isMarsFeedsLoading } = state.marsFeed;
  return { marsFeed, marsFeedFetchFailed, isMarsFeedsLoading };
};

export default connect(mapStateToProps, { fetchMarsNewsFeed })(MarsNewsFeed);
