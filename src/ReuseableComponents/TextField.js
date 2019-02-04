import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import images from '../Assets';
import { heightRatio, widthRatio } from "../utility/utility";

const TextField = (props) => {
  return (

    <View style={[styles.container,props.topViewStyle]}>
      <Text style={styles.Label}>{props.labelText}</Text>
      <View style={[styles.InputTextPassView,props.textViewStyle]}>
        <TextInput
          placeholderTextColor="#656565"
          placeholder={props.placeholder}
          style={[styles.InputText,props.textInputStyle]}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          editable={props.editable}
          multiline
          
        // lhButton={props.lhButton}


        />

        {props.lhButton === true ?
          <TouchableOpacity
          // onPress={props.onPress}>
          >
            <Image
              resizeMode='contain'
              style={styles.LoginPassimage}
              source={images.LoginShowPass}
            />
          </TouchableOpacity> : null}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },

  Label: {
    marginRight: 15,
    marginBottom: 15,
    color: "#1c75bc",
    fontSize: 14,
  },
  InputText: {
    flex: 1,
    padding: 0,
  },
  InputTextPassView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ced2d9',
    borderBottomWidth: 1
  },
  LoginPassimage: {
    height: heightRatio(72),
    width: widthRatio(72),
  },
});
export default TextField;