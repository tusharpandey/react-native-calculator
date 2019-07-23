import React from "react";
import { StyleSheet, View, TextInput, Image, Text, KeyboardAvoidingView } from 'react-native';
import AppImage from './AppImage'
import Constants from "./Constants";

export default class Operation extends React.Component {

    static navigationOptions = {
        title: 'Operation',
    };

    constructor(props) {
        super(props);
        this.state = { input1: 0 };
        this.state = { input2: 0 };
    }

    render() {

        var operation = this.props.navigation.state.params.operation

        return (
            <View style={styles.parentContainer}>

                <View style={styles.container}>
                    <View style={styles.userInput}>
                        <TextInput keyboardType='numeric' placeholder="input" onChangeText={(input1) => this.setState({input1})} />
                    </View>

                    <Image style={styles.operationContainer} source={this.getImageUrl(operation)} />

                    <View style={styles.userInput}>
                        <TextInput keyboardType='numeric' placeholder="input" onChangeText={(input2) => this.setState({input2})}/>
                    </View>
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.textStyle}>Result : {this.getResult(operation, this.state.input1, this.state.input2)} </Text>
                </View>

            </View>
        );
    }

    getResult = (param,input1,input2) => {
        var result = 0;
        switch (param) {
            case Constants.ADDITION:
                result =  eval(input1) + eval(input2)
                break
            case Constants.SUBTRACTION:
                result = eval(input1) - eval(input2)
                break
            case Constants.MULTIPLICATION:
                result =  eval(input1) * eval(input2)
                break
            case Constants.DIVIDE:
                result = eval(input1) / eval(input2)
                break
            default:
                result = 0
                break
        }

        return isNaN(result) ? 0 : result 
    }

    getImageUrl = (param) => {
        switch (param) {
            case Constants.ADDITION:
                return AppImage.addition
            case Constants.SUBTRACTION:
                return AppImage.substraction
            case Constants.MULTIPLICATION:
                return AppImage.multiplcation
            case Constants.DIVIDE:
                return AppImage.divide
            default:
                break;
        }
    }
}

const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    container: {
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    userInput: {
        marginLeft: 18,
        marginRight: 18,
        paddingLeft: 8,
        flex: 3,
        borderWidth: 0.5,
        borderColor: 'gray',
        height: 25,
    },

    operationContainer: {
        flex: 1,
        width: 25,
        height: 25,
    },

    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});
