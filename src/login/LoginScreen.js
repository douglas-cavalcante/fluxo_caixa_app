import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from "../firebaseConnection";

export class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: "#FFFF00"
    },
    headerTintColor: "#000000"
  }

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      senha: "",
    }

    firebase.auth().signOut();
  }

  loginUser = () => {
    const { email, senha } = this.state;

    if (email && senha) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate("HistoricList");
        }
      });

      firebase.auth().signInWithEmailAndPassword(
        email,
        senha
      ).catch((error) => {
        alert(error.code);
      });
    } else {
      alert("Digite todos os dados !");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput value={this.state.email} style={styles.input} onChangeText={(email) => this.setState({ email })} />
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} value={this.state.senha} style={styles.input} onChangeText={(senha) => this.setState({ senha })} />
        <Button title="Entrar" onPress={this.loginUser} />
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
    marginBottom: 10
  }
});