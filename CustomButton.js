import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

const customButton = props => {
    const content = (
        <View style = {[styles.button, {backgroundColor: props.color}]}>
            <Text style = {styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress = {props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        borderWidth: 4,
        padding: 16,
        width: 40,
        alignItems: 'center'
    },
    text: {
        color:'white',
        fontSize: 4,
    }
});

export default customButton;