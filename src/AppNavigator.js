import { createStackNavigator, createAppContainer , createMaterialTopTabNavigator, createDrawerNavigator } from "react-navigation";
import SignUp from './Modules/SignUp/SignUp';
import SignIn from './Modules/SignIn/SignIn';
import Requests from './Modules/Requests/Requests';
import Todo from './Modules/Todo/Todo';
import UserProfile from './Modules/UserProfile/UserProfile';
import Done from './Modules/Done/Done';
import ForgotPassword from './Modules/ForgotPassword/ForgotPassword';
import OnGoing from './Modules/OnGoing/OnGoing';
import CompanyProfile from './Modules/CompanyProfile/CompanyProfile';
import CompanyServices from './Modules/CompanyServices/CompanyServices';
import Settings from './Modules/Settings/Settings';
import Splash from './Modules/SplashScreen/Splash';
import Language from './Modules/Language/Language';
import Notifications from './Modules/Notifications/Notifications';
import Type from './Modules/UserType/Type';
import Details from './Modules/Details/Details';
import React from 'react';
import { Image, Button, TouchableOpacity } from 'react-native';


//=============================================
//Signup , Signin And Forgot Password Screens
//=============================================
const LoginSignupStack = createStackNavigator({
    Signup :{
        screen : SignUp
    },
    Signin : {
        screen : SignIn
    },
    Forgot : {
        screen : ForgotPassword
    } 
},{
    headerMode: "float",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  })

//=============================================
//Tab Screens Navigator
//=============================================
const WorkerHomeTabNavigator = createMaterialTopTabNavigator({
    Request : Requests, 
    Todo : Todo,
    OnGoing : OnGoing,
    Done : Done 
}) 


//=============================================
//Home Screen Stack Navigator
//=============================================
const HomeScreensStack = createStackNavigator({
    Home : {
       screen : WorkerHomeTabNavigator 
       
    },
    DetailScreen : {
        screen : Details
    }
},{
    defaultNavigationOptions: ({ navigation }) => ({
        header : null,
    })
  })


//=============================================
//Company Profile Stack Navigator
//=============================================
const CompanyProfileScreenStack = createStackNavigator({
    CompanyProfile : {
        screen : CompanyProfile
    },
    CompanyServices : {
        screen : CompanyServices
    }
})
//=============================================
//Application Drawer Navigator 
//=============================================
const DrawerScreenStack = createDrawerNavigator({
    HomeStack : {
        screen : HomeScreensStack
    },
    CompanyProfileStack : {
        screen : CompanyProfileScreenStack
    },
    NotificationScreen :{
        screen : Notifications
    },
    SettingScreen :{
        screen : Settings
    },
    ProfileScreen : {
        screen : UserProfile
    },
    // Logout
})






//StackNavigatorForHomeScreen
// const HomeStack = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: () => {
//             return {
//                 title: "Home",
//             }
//         },
//     },
//     Details: {
//         screen: DetailsScreen,
//         navigationOptions: ({ navigation }) => {
//             return {
//                 title: navigation.getParam('name', 'A Nested Details Screen'),
//                 //headerTitle overRider the property of header and display tha component of text or img or button
//                 headerTitle: <Image source={require("./Assets/Images/img.png")} style={{ width: 20, height: 20 }}/>,
//                 headerRight: (
//                     <Button
//                     onPress={navigation.getParam('increaseCount')}
//                     title="+1"
//                     color="black"
//                     />
//                 ),
//               }
           
//         },
//     }
// },
//     {
//         initialRouteName: 'Home',
//         /* The header config from HomeScreen is now here */
//         defaultNavigationOptions: {
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontSize: 30,
//           },
//         },
//       }
// );
  
// //StackNavigatorForLogginStack
//   const LogginStack = createStackNavigator({
//     Signup: {
//         screen: SignUp,
//         navigationOptions: {
//                 title: "Signup",
//                 headerStyle: {
//                     backgroundColor: 'seagreen',
//                   },
//                   headerTintColor: '#fff',
//                   headerTitleStyle: {
//                     fontSize: 25,
                
//                   }
//         }
//     },
//     Signin: {
//         screen: SignIn,
//         navigationOptions:{
//                 title : 'Signin',
//                 //headerTitle overRider the property of header and display tha component of text or img or button
//                 headerTitle: <Image source={require("./Assets/Images/img.png")} style={{ width: 10, height: 10 }}/>,
//                 headerLeft: (
//                     <Button
//                       onPress={() => alert('This is a button!')}
//                       title="home"
//                       color="black"
//                     />
//                   ),
//                 headerStyle: {
//                 backgroundColor: 'black',
//                   },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                 fontSize: 20,
//                 }

//             }
//         }
//   });
  
// //TabNavigator
//   const TabNavigator = createMaterialTopTabNavigator(
//     {
//       Home:HomeStack,
//       Loggin: LogginStack,
//     },{
//         headerMode: "float",
//         gesturesEnabled: false,
//         defaultNavigationOptions: ({ navigation }) => ({
//         headerStyle: {
//             backgroundColor: 'red',
//         },
//         headerTintColor: 'pink',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//         headerLeft: (
    
//         <TouchableOpacity
//         onPress={() => this.props.navigation.toggleDrawer()}
//         >
//         <Image style={{ width: 25, height: 18, marginLeft: 15 }} source={require("./Assets/Images/drawer.png")}/>
//         </TouchableOpacity>
//         ),
//         })
//       }
//   );


//   //DrawerNavigator
//   const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//       screen: Home,
//       navigationOptions : {
//         title: 'Home',
//         drawerIcon: ({ tintColor }) => (
//           <Image source={require("./Assets/Images/img.png")} style={[{ width: 10, height: 10 }, {tintColor : tintColor}]}
//           />
//         ),
//       }
//     },
//     Details: {
//       screen: DetailsScreen,
//       navigationOptions : {
//         drawerLabel: 'Notifications',
//         drawerIcon: ({ tintColor }) => (
//           <Image
//           source={require("./Assets/Images/img.png")} style={[{ width: 20, height: 20 }, {tintColor : tintColor}]}
//           />
//         ),
//       }
//     },
//     Signin: {
//         screen: SignIn,
//         navigationOptions : {
//           title: 'Signin',
//           drawerIcon: ({ tintColor }) => (
//             <Image source={require("./Assets/Images/img.png")} style={[{ width: 10, height: 10 }, {tintColor : tintColor}]}
//             />
//           ),
//         }
//       },
//     Signupn: {
//         screen: SignUp,
//         navigationOptions : {
//           title: 'Signup',
//           drawerIcon: ({ tintColor }) => (
//             <Image source={require("./Assets/Images/img.png")} style={[{ width: 20, height: 30 }, {tintColor : tintColor}]}
//             />
//           ),
//         }
//       }
//   });

//   //====================================
// //   const drawerScreenState = createStackNavigator(
// //     {
// //       supervisorHome: {
// //         screen: SupervisorHome,
// //         navigationOptions: () => ({
// //           title: 'My Tasks',
// //       })
// //       },
// //       crewHome: {
// //         screen: CrewHome,
// //         navigationOptions: () => ({
// //           title: 'My Tasks',
// //       })
// //       },
// //       myProfile: {
// //         screen: MyProfile,
// //         navigationOptions: () => ({
// //           title:'My Profile',
          
// //         }),
// //       },
// //       fAQS: {
// //         screen: FAQS,
// //         navigationOptions: () => ({
// //           title:'Help & FAQ\'S'
// //         }),
// //       },
// //     }, {
// //       headerMode: "float",
// //       gesturesEnabled: false,
// //       defaultNavigationOptions: ({ navigation }) => ({
// //         headerStyle: {
// //           backgroundColor: colorsUtil.toolbarBgColor,
// //         },
// //         headerTintColor: colorsUtil.toolbarTextColor,
// //         headerTitleStyle: {
// //           fontWeight: 'bold',
// //         },
// //         headerLeft: (
  
// //           <TouchableOpacity
// //             onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
// //           >
// //             <Image style={{ width: 25, height: 18, marginLeft: 15 }} source={images.drawer_icon} />
// //           </TouchableOpacity>
// //         ),
// //       })
// //     });
  
// //   const DrawerState = createDrawerNavigator(
// //     {
// //       drawerScreenStack: { screen: drawerScreenState },
// //     },
// //     {
// //       contentComponent: SideBar,
// //       drawerWidth: 300,
// //       drawerPosition: 'left',
// //       drawerOpenRoute: 'DrawerOpen',
// //       drawerCloseRoute: 'DrawerClose',
// //       drawerToggleRoute: 'DrawerToggle',
// //       screenMode: 'screen'
  
// //     }
// //   )

//   //======================================


// //DrawerStackNavigator

// // const AppNavigator = createStackNavigator({
// //     Home :{
// //         screen : Home
// //     },
// //     Signup : {
// //         screen : SignUp
// //     },
// //     Signin : {
// //         screen : SignIn
// //     },
// //     Detail :{
// //         screen : DetailsScreen

// //     }
// // },
// //     {
// //         initialRouteName: "Home"
// //     }
// // )


//===========================================
//AppAllNavigation
//===========================================
const AppNavigator = createStackNavigator({
    SplashScreen : {
        screen : Splash
    },
    UserType:{
        screen : Type
    },
    UserLanguage : {
        screen : Language
    },
    LoginSignup : {
        screen : LoginSignupStack,
        navigationOptions : () => ({
            title : null
        })
    },
    DrawerStack : {
        screen : DrawerScreenStack
    },
    
},{
    defaultNavigationOptions: ({ navigation }) => ({
        // header : null,
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  })
export const AppContainer = createAppContainer(AppNavigator);