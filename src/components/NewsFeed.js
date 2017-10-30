import React, { Component } from 'react';
import { FlatList } from 'react-native';
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

  createDataSource({ newsFeed }) {
    this.dataSource = newsFeed;
  }

  renderItem = ({ item }) => {
    return (<NewsItem
      title={item.title}
      imageUrl={item.thumbnail}
    />);
  };


  render() {
    return (
      <FlatList
        data={this.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { newsFeed } = state;
  return { newsFeed };
};

export default connect(mapStateToProps, { fetchNewsFeed })(NewsFeed);
