import React, { Component } from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import firebase from '../firebaseConnection';

export class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

  }

  handleOnPress = (screen) => () => {
    this.props.navigation.navigate(screen);
  }

  componentDidMount(){
    firebase.database().ref("usuarios").on("value", (snapshot) => {
      let total = 0;
      snapshot.forEach((item) => {
        total = total +  item.val().saldo;
      });
      this.setState({ total });
    });
  }

  render() {
    return (
      <ImageBackground source={require("../../assets/images/fundo.jpg")} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de caixa</Text>
          <View style={styles.buttonArea} >
            <TouchableHighlight underlayColor="white" style={styles.button} onPress={this.handleOnPress("Register")}>
              <Text style={styles.text}>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={styles.button} onPress={this.handleOnPress("Login")}>
              <Text style={styles.text}>Login</Text>
            </TouchableHighlight>
          </View>
          <Text>Administramos: R$ {this.state.total.toFixed(2)}</Text>
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