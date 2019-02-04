import React, { Component } from 'react';
import { Text, View , Image } from 'react-native';

class Splash extends Component {
    state = {  }
    render() {
    setTimeout(() => {
        this.props.navigation.navigate('DrawerStack');
    }, 2000);
        return (
            <View>
                <Text>This is A Splash Screen</Text>
            </View>
        );
    }
}

export default Splash;