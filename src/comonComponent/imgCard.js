import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ImgCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // console.log("ImgCard", this.props);
    return (
      <View style={styles.titleImgCard}>
        <Image source={this.props.urlPath} style={styles.imgStyle} />
        {/* <Text style={styles.textStyle}>{this.props.textContent}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleImgCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  imgStyle: {
    width: 20,
    height: 20
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  }
});
