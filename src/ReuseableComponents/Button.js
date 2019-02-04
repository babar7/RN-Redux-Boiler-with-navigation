import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const Button = (props) => {
    return (

        <TouchableOpacity
            style={[styles.button,props.buttonStyle]}
            onPress={props.onPress}
        >
            <Text style={{ color: 'white', fontSize: 18 }}> {props.buttonText} </Text>
        </TouchableOpacity>

    )

}
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor: '#1c75bc',
        padding: 10,
        borderRadius: 20,
        alignSelf:'stretch',
        marginTop:30,
        justifyContent:'center'

    }
})
export default Button;