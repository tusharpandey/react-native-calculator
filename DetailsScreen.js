import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import ListComponent from "./components/ListComponent";

export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Calculator',
  };

  render() {
    return (
      <View>

        <FlatList
          data={[
            {key: 'Addition'},
            {key: 'Substraction'},
            {key: 'Multiplication'},
            {key: 'Divide'},
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
