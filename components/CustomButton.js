import React from 'react'
import {View,Button} from 'react-native'

export default class CustomButton extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title={this.props.name}
                />
            </View>
        );
    }
}