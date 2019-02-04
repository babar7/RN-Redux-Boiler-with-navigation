import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView , FlatList} from 'react-native';
import TextField from '../../ReuseableComponents/TextField'
import Button from '../../ReuseableComponents/Button'
// import images from '../../Assets';
import { heightRatio, widthRatio } from "../../utility/utility";


class SignUp extends Component {

  _getSignUpDict = () => {
    return (
      dict = [
        {
          type: "FULLNAME_CHANGED",
          label: "Full Name",
          keyboardType: "name-phone-pad",
          value: '',
          placeholder: "John Doe",
          editable: true,
          key: "FULLNAME_CHANGED",
          secureTextEntry: false,
          lhButton: false
        },
        {
          type: 'EMAIL_CHANGED',
          label: "Email",
          keyboardType: "name-phone-pad",
          value: '',
          placeholder: "enter_email@example.com",
          editable: true,
          key: "EMAIL_CHANGED",
          secureTextEntry: false,
          lhButton: false
        },
        {
          type: "PASSWORD_CHANGED",
          label: "Password",
          keyboardType: "name-phone-pad",
          value: '',
          placeholder: "********",
          editable: true,
          key: "PASSWORD_CHANGED",
          secureTextEntry: true,
          // image: images.LoginShowPass,
          lhButton: true
        },
        {
          type: "CONFIRMPASSWORD_CHANGED",
          label: "Confirm Password",
          keyboardType: "name-phone-pad",
          value: '',
          placeholder: "********",
          editable: true,
          key: "CONFIRMPASSWORD_CHANGED",
          secureTextEntry: true,
          // image: images.LoginShowPass,
          lhButton: true

        },

      ]
    )
  }

  itemTypeCheck(item) {
    switch (item.key) {
      case "FULLNAME_CHANGED":
      case 'EMAIL_CHANGED':
      case 'PASSWORD_CHANGED':
      case 'CONFIRMPASSWORD_CHANGED':

        return (
          <TextField
            labelText={item.label}
            secureTextEntry={item.secureTextEntry}
            onChangeText={(text) => this.props.change(text, item.key)}
            // value={item.value}
            labelColor={'#a4a5ad'}
            color={"#1c75bc"}
            placeholderTextColor={'#656565'}
            placeholder={item.placeholder}
            keyboardType={item.keyboardType}
            editable={item.editable}
            lhButton={item.lhButton}
          />
        );
      default:
        break;
    }
  }



  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginLeft: 30, marginRight: 30 }}>
          <Image
            resizeMode="contain"
            style={styles.image}
            // source={images.LoginLogo}
          />
          <FlatList
            extraData={this._getSignUpDict()}
            data={this._getSignUpDict()}
            renderItem={({ item }) => this.itemTypeCheck(item)}
            keyExtractor={(item, index) => "" + item.type + index}
          />
          <Button buttonText='SIGN UP' buttonStyle={{ height: 40 }} />
          <Text style={styles.textSignUp}>Do you already have an account?</Text>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.props.navigation.navigate('Signin')}
          >
            <Text style={{ color: '#39b54a', fontSize: 18 }}>Sign In </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: heightRatio(619),
    width: widthRatio(850),
  },
  buttonSignIn: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 15,
    // marginTop: 15,
  },
  textSignUp: {
    padding: 10,
    color: '#656565',
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 15
  },

})

export default SignUp;