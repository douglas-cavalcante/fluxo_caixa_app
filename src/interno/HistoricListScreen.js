import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import HistoricoItem from "./HistoricItem";
import firebase from "../firebaseConnection";

export class HistoricListScreen extends Component {

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

        firebase.database().ref("usuarios").child(user.uid).on("value", (snapshot) => {
          const saldo = parseFloat(snapshot.val().saldo);
          this.setState({ saldo });
        });

        //Verificando histórico
        firebase.database().ref("historico").child(user.uid).on("value", (snapshot) => {
          let state = this.state;
          state.historico = [];
          snapshot.forEach((childItem) => {
            state.historico.push({
              key: childItem.key,
              type: childItem.val().type,
              value: parseFloat(childItem.val().valor),
            });
          });
          this.setState(state);
        });

      } else {
        this.props.navigation.navigate("Home");
      }
    });
  }

  redirect = (screen) => {
    this.props.navigation.navigate(screen);
  }

  logout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.saldoArea}>
          <Text style={styles.saldo}>Saldo: R$ {this.state.saldo.toFixed(2)}</Text>
        </View>
        <FlatList
          style={styles.historico}
          data={this.state.historico}
          renderItem={({ item }) => <HistoricoItem data={item} />}
          keyExtractor={(item, _index) => item.key}
        />
        <View style={styles.botaoArea}>
          <Button title={"+ Receita"} onPress={() => this.redirect("RevenueForm")} />
          <Button title={"+ Despesa"} onPress={() => this.redirect("AddExpense")} />
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
    backgroundColor: "#DDDDDD",
  }
});