import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";

import ImgCard from "../comonComponent/imgCard";

import React from "react";
import HomeScreenItem from "../containers/homeComponent/homeScreen";
import DetailsScreenItem from "../containers/detailsComponent/detailsScreen";
import SettingsScreenItem from "../containers/settingsComponent/settingsScreen";

const HomeScreen = createStackNavigator({
  Home: HomeScreenItem
});

const DetailsScreen = createStackNavigator(
  {
    Settings: SettingsScreenItem,
    Details: DetailsScreenItem
  },
  {
    initialRouteName: "Details",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // console.log("tabBarIcon", navigation, focused);
        const { routeName } = navigation.state;
        let iconPath, titleContent;
        if (routeName === "Home") {
          iconPath = require("../assets/images/buttonImg/bg11.png");
          // require("./appContent/assets/images/buttonImg/bg11.png");    //根据此文件去找文件路径
          titleContent = "Home";
        } else if (routeName === "Details") {
          iconPath = require("../assets/images/buttonImg/user.png");
          titleContent = "Details";
        }
        return (
          <ImgCard
            urlPath={iconPath}
            // urlPath={require("./appContent/assets/images/buttonImg/bg11.png")}
            // urlPath={require("../assets/images/buttonImg/Gitlab.png")}
            textContent={titleContent}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "red",
        inactiveTintColor: "gray"
      }
    })
  }
);

export default createAppContainer(BottomTabNavigator);
