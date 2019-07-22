import React from "react";
import { View, Image } from 'react-native';
import AppImage from './AppImage'

export default class Operation extends React.Component {

    static navigationOptions = {
        title: 'Operation',
    };

    render() {
        return (
            <View>
                <View>
                    <Image source={AppImage.splashLogo} />
                </View>
            </View>
        );
    }
}
