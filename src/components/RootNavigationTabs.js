import { TabNavigator } from 'react-navigation';
import NewsFeed from './NewsFeed';
import MarsNewsFeed from './MarsNewsFeed';
import PictureOfDayList from './PictureOfDayList';


const RootNavigationTab = TabNavigator(
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
  },
);

export default RootNavigationTab;
