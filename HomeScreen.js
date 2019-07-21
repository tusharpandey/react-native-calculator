import React from 'react';
import { View, Image } from 'react-native';
import AppImage from './AppImage'


export default class HomeScreen extends React.Component {

  performTimeConsumingTask = async () => {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(
        () => { resolve('result') },
        2000
      )
    });
    return promise;
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Details');
    }
  }

  render() {
    return (
      <View style={styles.splash}>
        <Image style={styles.logo} source={AppImage.splashLogo} />
      </View>
    );
  }
}

const styles = {
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  logo: {
    width: 100,
    height: 100
  }
}