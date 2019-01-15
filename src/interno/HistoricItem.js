import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native";

export default class HistoricItem extends Component {

  constructor(props) {
    super(props);
    let bg = "#FF6347";
    if (this.props.data.type === "receita") {
      bg = "#98FB98";
    }
    this.state = {
      bg: bg
    };
  }

  render() {
    console.log(this.props.data)
    return (
      <View style={[styles.areaItem, { backgroundColor: this.state.bg }]}>
        <Text>{(this.props.data.type).toUpperCase()}</Text>
        <Text>R$ {(this.props.data.value).toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaItem: {
    height: 40,
    flex: 1,
    backgroundColor: "#CCCCCC",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 10,
    flexDirection: "row"
  },
});