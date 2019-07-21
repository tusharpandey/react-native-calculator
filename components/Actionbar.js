import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Actionbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.actionbar}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 78,
        paddingTop: 24,
        backgroundColor: 'steelblue'
    },
    actionbar: {
        paddingLeft: 18,
        height: 54,
        fontSize:18,
        flex: 1,
        textAlignVertical: 'center',
        backgroundColor: 'skyblue'
    },
})