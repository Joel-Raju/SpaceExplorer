import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { fetchNewsFeed } from '../actions';
import NewsItem from './NewsItem';


class NewsFeed extends Component {
  componentWillMount() {
    this.props.fetchNewsFeed();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ feeds }) {
    this.dataSource = feeds;
  }

  renderItem = ({ item }) => {
    return (<NewsItem
      newsItem={item}
      navigation={this.props.navigation}
    />);
  };

  renderLoadingOrError = () => {
    const { feedsFetchFailed, isFeedsLoading } = this.props;
    if (feedsFetchFailed) {
      return (
        <Text>There was a problem fetching NASA News Feeds.</Text>
      );
    } else if (isFeedsLoading) {
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
  const { feeds, feedsFetchFailed, isFeedsLoading } = state.newsFeed;
  return { feeds, feedsFetchFailed, isFeedsLoading };
};

export default connect(mapStateToProps, { fetchNewsFeed })(NewsFeed);
