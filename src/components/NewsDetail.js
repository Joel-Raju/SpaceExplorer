import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';


const windowSize = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollviewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  imageStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    height: 360,
    width: windowSize.width,
    resizeMode: Image.resizeMode.contain,
  },
  titleStyle: {
    marginVertical: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    marginVertical: 8,
    fontSize: 16,
  },
  dateStyle: {
    marginVertical: 8,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

const NewsDetail = (props) => {
  const {
    title,
    thumbnail,
    description,
    date,
  } = props.navigation.state.params.newsItem;

  const {
    container,
    imageStyle,
    titleStyle,
    dateStyle,
    descriptionStyle,
    scrollviewStyle,
  } = styles;

  return (
    <ScrollView style={scrollviewStyle}>
      <Image
        source={{ uri: thumbnail }}
        style={imageStyle}
        resizeMode="contain"
      />
      <View style={container}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={dateStyle}>{date}</Text>
        <Text style={descriptionStyle}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;
