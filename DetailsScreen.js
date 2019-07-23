import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import ListComponent from "./components/ListComponent";
import Constants from "./Constants";

export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Calculator',
  };

  render() {
    return (
      <View>

        <FlatList
          data={[
            {key: Constants.ADDITION},
            {key: Constants.SUBTRACTION},
            {key: Constants.MULTIPLICATION},
            {key: Constants.DIVIDE},
          ]}
          renderItem={({item}) => <ListComponent name = {item.key} navigation={this.props.navigation}/>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
