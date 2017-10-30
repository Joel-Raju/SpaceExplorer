import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { fetchNewsFeed } from '../actions';

class NewsFeed extends Component {
  componentWillMount() {
    this.props.fetchNewsFeed();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ newsFeed }) {
    const ds = new FlatList.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(newsFeed);
  }

  renderRow(newsFeed) {

  }

  render() {
    return(
      
    );
  }
}

const mapStateToProps = (state) => {
  const { newsFeed } = state;
  return { newsFeed };
};

export default connect(mapStateToProps, { fetchNewsFeed })(NewsFeed);
