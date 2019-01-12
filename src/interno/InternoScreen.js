import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { HistoricoItem } from "./HistoricoItem";
import firebase from "../firebaseConnection";

export class InternoScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      saldo: 0,
      historico: [],
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref("usuarios").child(user.uid).on('value', (snapshot) => {
          const saldo = snapshot.val().saldo;
          this.setState({ saldo });
        })
      } else {
        this.props.navigation.navigate("Home");
      }
    });
  }

  addReceita = () => {

  }

  addDespesa = () => {

  }


  logout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.saldoArea}>
          <Text style={styles.saldo}>Saldo: R$ {this.state.saldo}</Text>
        </View>
        <FlatList
          style={styles.historico}
          data={this.state.historico}
          renderItem={(item) => <HistoricoItem data={item} />}
        />
        <View style={styles.botaoArea}>
          <Button title={"+ Receita"} onPress={this.addReceita} />
          <Button title={"+ Despesa"} onPress={this.addDespesa} />
          <Button title={"Logout"} onPress={this.logout} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saldoArea: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#DDDDDD",
  },
  saldo: {
    textAlign: "center",
    fontSize: 25,
  },
  historico: {
    flex: 1
  },
  botaoArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#DDDDDD"
  }
});