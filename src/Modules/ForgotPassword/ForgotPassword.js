import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

class ForgotPassword extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Forget Pasword Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
})

export default ForgotPassword;