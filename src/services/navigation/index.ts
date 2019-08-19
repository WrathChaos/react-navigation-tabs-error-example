import {createBottomTabNavigator} from 'react-navigation';
// Screens
import HomeScreen from '../../screens/home/HomeScreen';
import VideoScreen from '../../screens/video/VideoScreen';

const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null,
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    video: VideoScreen,
  },
  {
    defaultNavigationOptions,
  },
);
