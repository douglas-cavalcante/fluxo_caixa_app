import React, { Component } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import firebase from "../firebaseConnection";

export class PreLoadScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Interno");
      } else {
        this.props.navigation.navigate("Home");
      }
    });
  }

  render() {
    return (
      <ImageBackground source={require("../../assets/images/fundo.jpg")} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de caixa</Text>
        </View>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    backgroundColor: "transparent"
  },
});