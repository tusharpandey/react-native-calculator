import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './DetailsScreen'
import HomeScreen from './HomeScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);