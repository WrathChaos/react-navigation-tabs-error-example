import {createBottomTabNavigator} from 'react-navigation';
// Screens
import HomeScreen from '../../scenes/home';
import TaskDetailsScreen from '../../scenes/task-details';


const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null,
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    taskDetails: TaskDetailsScreen,
  },
  {
    defaultNavigationOptions,
  },
);
