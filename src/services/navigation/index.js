import { createBottomTabNavigator } from "react-navigation-tabs";
// Screens
import HomeScreen from "../../scenes/home/Home";
import TaskDetailsScreen from "../../scenes/task-details";

const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    taskDetails: TaskDetailsScreen
  },
  {
    defaultNavigationOptions
  }
);
