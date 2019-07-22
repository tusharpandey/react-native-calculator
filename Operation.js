import React from "react";
import { StyleSheet, View, TextInput, Image } from 'react-native';
import AppImage from './AppImage'

export default class Operation extends React.Component {

    static navigationOptions = {
        title: 'Operation',
    };

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.userInput}>
                    <TextInput keyboardType = 'numeric' placeholder = "input" />
                </View>
                
                <Image style={styles.operationContainer} source={AppImage.addition} />

                <View style={styles.userInput}>
                    <TextInput keyboardType = 'numeric' placeholder = "input" />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        marginLeft: 18,
        marginRight: 18,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    userInput: {
        paddingLeft:8,
        flex: 3,
        borderWidth: 0.5,
        borderColor: 'gray',
        height: 25,
    },

    operationContainer: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        width: 25,
        height: 25,
    }
});
