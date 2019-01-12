import React, { Component } from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableHighlight } from "react-native";

export class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  handleOnPress = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <ImageBackground source={require("../../assets/images/fundo.jpg")} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de caixa</Text>
          <View style={styles.buttonArea} >
            <TouchableHighlight underlayColor="white" style={styles.button} onPress={() => this.handleOnPress("Cadastro")}>
              <Text style={styles.text}>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={styles.button} onPress={() => this.handleOnPress("Login")}>
              <Text style={styles.text}>Login</Text>
            </TouchableHighlight>
          </View>
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
  buttonArea: {
    marginTop: 30,
  },
  button: {
    backgroundColor: "#bfb300",
    margin: 10,
    height: 40,
    width: 200,
    justifyContent: "center"
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
  }
});