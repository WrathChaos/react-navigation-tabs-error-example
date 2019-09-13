import { createBottomTabNavigator } from "react-navigation-tabs";
// Screens
import HomeScreen from "screens/home/Home";
import PageScreen from "screens/page-screen";

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
