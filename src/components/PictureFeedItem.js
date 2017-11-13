import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 1,
    backgroundColor: '#F8F8F8',
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    width: '60%',
    height: 120,
    padding: 8,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  imageStyle: {
    height: 120,
    resizeMode: Image.resizeMode.contain,
  },
});

export default class PictureFeedItem extends Component {
  componentWillMount() {

  }
  onItemPressed() {
    this.props.navigation.navigate('PictureDetails', {
      pictureFeedItem: this.props.pictureFeedItem,
    });
  }

  render() {
    const { title, thumbnail } = this.props.pictureFeedItem;
    const {
      container, imageContainer, imageStyle, titleContainer, titleStyle,
    } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPressed()}>
        <View style={container}>
          <View style={imageContainer}>
            <Image
              source={{ uri: thumbnail }}
              style={imageStyle}
            />
          </View>
          <View style={titleContainer}>
            <Text style={titleStyle}>{title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


PictureFeedItem.propTypes = {
  pictureFeedItem: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};
