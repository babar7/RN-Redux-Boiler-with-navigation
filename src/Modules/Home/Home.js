
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,Button  } from 'react-native';
import {NavigationEvents } from 'react-navigation'

class Home extends Component {
 
  render() {
    obj = {
      name : 'babar',
      id : 35,
      gender : 'male'
    }

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        {/* Navigation Events that runs on the navigation */}
        <NavigationEvents
          onWillFocus={payload => console.log('will focus',payload)}
          onDidFocus={payload => console.log('did focus',payload)}
          onWillBlur={payload => console.log('will blur',payload)}
          onDidBlur={payload => console.log('did blur',payload)}
        />
        <Button
          title="Go to SignIn"
          onPress={() => this.props.navigation.navigate('Signin')}
        />
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate('Details', {name : 'umair'})}
        />
        {/* toggleDrawer */}
        <Button
          title="open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        {/* this.props.navigation.openDrawer();
this.props.navigation.closeDrawer(); */}
      </View>

    )
  }
}
export default Home;



