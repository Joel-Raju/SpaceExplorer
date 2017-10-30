import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
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
    position: 'relative',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '35%',
    height: 120,
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

const NewsItem = (props) => {
  const { title, imageUrl } = props;
  const {
    titleStyle, container, imageStyle, titleContainer,
    imageContainer,
  } = styles;

  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={imageStyle}
        />
      </View>
      <View style={titleContainer}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </View>
  );
};


NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default NewsItem;
