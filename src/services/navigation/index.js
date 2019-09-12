import { createBottomTabNavigator } from "react-navigation-tabs";
// Screens
import HomeScreen from "../../scenes/home/Home";
import PageScreen from "../../scenes/page-screen";

const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    taskDetails: PageScreen
  },
  {
    defaultNavigationOptions
  }
);
