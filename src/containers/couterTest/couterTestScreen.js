import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, Image } from "react-native";
import { bindActionCreators } from "redux";
import * as action from "../../myRedux/actions/moviesInfoAction/index";

class LogoTitle extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          // source={require("./appContent/assets/images/buttonImg/favicon.png")}
          source={require("../../assets/images/buttonImg/bg11.png")}
          // source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{ width: 32, height: 32 }}
        />
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: "首页",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/images/buttonImg/user.png")}
        style={{ tintColor: tintColor }}
      />
    ),
    headerTitle: <LogoTitle />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <Text>Home Screen</Text>

          <Text>Home Screen</Text>
        </View>
        <Button
          title="ADD"
          onPress={
            () => {
              this.props.navigation.push("Details");
            }
            // onPress={() => this.props.navigation.navigate("Details")}
          }
        />
        <View style={{ height: 20 }} />
        <Button
          title="REDUCE"
          onPress={
            () => {
              this.props.navigation.push("Settings");
            } // onPress={() => this.props.navigation.navigate("Details")}
          }
        />
      </View>
    );
  }
}
// export default connect()(HomeScreen);

const mapStateToProps = state => {
  return { moviesInfoData: state.moviesInfo.get("moviesInfoData") };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, action), dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
