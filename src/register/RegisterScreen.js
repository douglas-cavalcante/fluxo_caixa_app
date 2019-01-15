import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "../firebaseConnection";

export class RegisterScreen extends Component {

  static navigationOptions = {
    title: "Cadastro",
    headerStyle: {
      backgroundColor: "#FFFF00"
    },
    headerTintColor: "#000000"
  }

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }

    firebase.auth().signOut();
  }

  addUser = () => {
    const { email, password } = this.state;
    if (email && password) {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.database().ref("usuarios").child(user.uid).set({
            saldo: 0,
          });
          this.props.navigation.navigate("HistoricList");
        }
      });

      firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      ).catch((error) => {
        alert(error.code);
      });

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput value={this.state.email} style={styles.input} onChangeText={(email) => this.setState({ email })} />
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} value={this.state.password} style={styles.input} onChangeText={(password) => this.setState({ password })} />
        <Button title="Cadastrar" onPress={this.addUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#CCCCCC",
    padding: 5,
    marginBottom: 10,
  },
});