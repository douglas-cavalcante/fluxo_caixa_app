import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "../firebaseConnection";

export class RevenueFormScreen extends Component {

  static navigationOptions = {
    title: "Adicionar Receita",
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleAddRevenue = () => {
    const { value } = this.state;
    if (value) {
      let historico = firebase.database().ref("historico").child(firebase.auth().currentUser.uid);
      let user = firebase.database().ref("usuarios").child(firebase.auth().currentUser.uid);
      let key = historico.push().key;
      historico.child(key).set({
        type: "receita",
        valor: value
      });
      //selecionando o usuário
      user.once("value").then((snapshot) => {
        let saldo = parseFloat(snapshot.val().saldo);
        saldo = saldo + parseFloat(value);
        user.set({
          saldo: saldo
        });
      });
      this.props.navigation.goBack();
    } else {
      alert("Preencha o campo");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Qual valor você quer adicionar ?</Text>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          value={this.state.value}
          onChangeText={(value) => this.setState({ value })}
          autoFocus={true}
        />
        <Button title={"Adicionar"} onPress={this.handleAddRevenue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#DDDDDD",
    marginTop: 20,
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});