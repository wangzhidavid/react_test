import React from "react";
import { connect } from "react-redux";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import * as action from "../../myRedux/actions/moviesInfoAction/index";

class SettingsScreenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { navigation } = this.props;

    let routeItem = navigation.state.params;
    let routeParamsId = navigation.getParam("id");
    // console.log(
    //   "SettingsScreenItem",
    //   navigation,
    //   routeItem,
    //   navigation.getParam("id")
    // );

    //  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //      {/* other code from before here */}
    //      <Button title="Go to Details" onPress={() => this.props.navigation.navigate("Details")} />
    //    </View>;
    return (
      <View style={styles.containerDetail}>
        <Image
          source={{
            uri:
              routeItem === undefined
                ? "https://facebook.github.io/react/logo-og.png"
                : routeItem.posters.thumbnail
          }}
          style={styles.thumbnailDetail}
        />
        <View style={styles.rightContainerDetail}>
          <Text style={styles.titleDetail}>
            {routeItem === undefined ? "react-native" : routeItem.title}
          </Text>
          <Text style={styles.yearDetail}>
            {routeItem === undefined ? "2016-11-16" : routeItem.year}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnailDetail: {
    width: 53 * 2,
    height: 81 * 2
  },

  rightContainerDetail: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titleDetail: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#000"
  },
  yearDetail: {
    fontSize: 14,
    textAlign: "center"
  }
});

// export default connect()(SettingsScreenItem);

const mapStateToProps = state => {
  return { LoginData: state.login.get("loginData") };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, action), dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreenItem);
