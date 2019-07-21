import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import Actionbar from './components/Actionbar'
import ListComponent from "./components/ListComponent";

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Actionbar name="MyApp" />

        <FlatList
          data={[
            {key: 'Addition'},
            {key: 'Substraction'},
            {key: 'Multiplication'},
            {key: 'Divide'},
          ]}
          renderItem={({item}) => <ListComponent name = {item.key}/>}
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
