import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class SignIn extends Component {
    state = { 
        text : '',
        number : ''
     }
    render() {
        return (
            <View>
                <TextInput  style={{ borderColor : 'black', borderWidth : 2 , margin : 10, borderRadius : 10}}
                key={'A78B'}
                onChangeText={(event, id)=> console.log('eventonChange', event, id)}
                placeholder='name here'
                />
                <Button 
                style={{ margin : 20, borderRadius : 30}}
                title='Click Me'
                onPress={()=> {
                console.log('text');
                }}
                />
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

export default SignIn;




