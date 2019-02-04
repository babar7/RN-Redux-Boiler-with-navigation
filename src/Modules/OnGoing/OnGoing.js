import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

class OnGoing extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Task On Going Screen</Text>
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

export default OnGoing;