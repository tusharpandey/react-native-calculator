import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ListComponent extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.actionbar}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionbar: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingLeft: 18,
        height: 54,
        fontSize:18,
        flex: 1,
        textAlignVertical: 'center',
    },
})