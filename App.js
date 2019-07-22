import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './DetailsScreen'
import HomeScreen from './HomeScreen'
import Operation from './Operation'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStack = createStackNavigator({ details: DetailsScreen, operation: Operation });

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    appStack: AppStack,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);
