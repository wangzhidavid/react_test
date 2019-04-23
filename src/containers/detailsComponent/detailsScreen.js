import React, { Component } from "react";
import { connect } from "react-redux";
import "whatwg-fetch";
import { bindActionCreators } from "redux";
import * as action from "../../myRedux/actions/moviesInfoAction/index";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

let REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class SampleAppMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loaded: false };
    this.fetchData = this.fetchData.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.onPressButton = this.onPressButton.bind(this);
  }

  componentDidMount() {
    // this.fetchData();
    // console.log("fetchData", this.props.moviesInfoData);
    // if (this.props.moviesInfoData.movies) {
    //   console.log("fetchData11111111", this.props.moviesInfoData);
    //   this.setState({
    //     data: this.state.data.concat(this.props.moviesInfoData.movies),
    //     loaded: true
    //   });
    // }
  }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log(
    //   "fetchData11111componentWillReceiveProps",
    //   this.props.moviesInfoData,
    //   nextProps.moviesInfoData
    // );

    if (nextProps.moviesInfoData.movies) {
      this.setState({
        data: this.state.data.concat(nextProps.moviesInfoData.movies),
        loaded: true
      });
    }
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  onPressButton(item) {
    // console.log("onPressButton", item);
    this.props.navigation.push("Settings", item);
    // this.props.navigation.push("Settings", {
    //   itemId: Math.floor(Math.random() * 100)
    // });
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    // console.log("renderMovie", item);
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPressButton(item);
        }}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: item.posters.thumbnail }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    // console.log("FlatList111", this.state.data);
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        keyExtractor={(item, index) => {
          item.id;
        }}
        style={styles.list}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});

// export default connect()(SampleAppMovies);

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
)(SampleAppMovies);
