import { Dimensions,Share,Alert } from 'react-native'

const { width, height } = Dimensions.get('window');

export const heightRatio = (orignalHeight) => {
  h = (orignalHeight / 2.69);
  return (h * height) / 736;
}
export const widthRatio = (orignalWidth) => {
  w = (orignalWidth / 2.69);
  return (w * width) / 414;
}
export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  }
  return true;
}

export const isEmpty = (obj) =>{
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export const checkError = (error) => {
  if (error.response === undefined) {
    return error.message
  } else if (error.response.status === 503) {
    return error.message
  } else {
    var values = Object.keys(error.response.data.data[0]).map((key) => {
      return error.response.data.data[0][key];
    });
    return ('â€¢ ' + values.join('\nâ€¢ '));
   // Alerts("titless",values)
  }
}
export const onShareButtonPressed = (item) => {
  Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
  }, {
          // Android only:
          dialogTitle: 'Share BAM goodness',
          // iOS only:
          excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter'
          ]
      })
}

export const Alerts = (title,description) => {
  Alert.alert(
    title,
    description,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}
