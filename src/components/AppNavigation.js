import { TabNavigator, StackNavigator } from 'react-navigation';
import NewsFeed from './NewsFeed';
import MarsNewsFeed from './MarsNewsFeed';
import NewsDetail from './NewsDetail';
import PictureOfDayList from './PictureOfDayList';
import PictureFeedDetail from './PictureFeedDetail';


const NavigationTabs = TabNavigator(
  {
    PicturesOfDay: {
      screen: PictureOfDayList,
      navigationOptions: {
        tabBarLabel: 'Pics of the Day',
      },
    },
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        tabBarLabel: 'News Feed',
      },
    },
    MarsNewsFeed: {
      screen: MarsNewsFeed,
      navigationOptions: {
        tabBarLabel: 'Mars News',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      indicatorStyle: {
        backgroundColor: 'white',
      },
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

const AppNavigation = StackNavigator({
  Home: {
    screen: NavigationTabs,
    navigationOptions: {
      header: null,
    },
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: {
      header: null,
    },
  },
  PictureDetails: {
    screen: PictureFeedDetail,
    navigationOptions: {
      header: null,
    },
  },
});

export default AppNavigation;
