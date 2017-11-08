import React from 'react';
import {
  Text,
  Image,
  Stylesheet,
  View,
} from 'react-native';


const NewsDetail = (props) => {
  const {
    title,
    thumbnail,
    description,
    date,
  } = props.navigation.state.params.newsItem;

  return (
    <View>
      <Text>{title}</Text>
      <Image
        source={{ uri: thumbnail }}
      />
      <Text>{date}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default NewsDetail;
