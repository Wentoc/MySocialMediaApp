// import * as React from 'react';
// import { Text, View, StyleSheet, Image, Alert, ToastAndroid, Switch, EdgeInsetsPropType } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Feather } from 'react-native-vector-icons';
// import { Header } from 'react-native-elements';
// // import LoginScreen from './screens/Login';
// import HomeScreen from './screens/HomeScreen';
// import WriteScreen from './screens/WriteScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// // function Tabs() {
// //     const insets = useSafeAreaInsets();
// //     return (
// //       <Tab.Navigator
// //         initialRouteName="HomeScreen"
// //         tabBarOptions={{
// //           activeTintColor: '#e91e63',
// //           labelStyle: { fontSize: 12 },
// //           style: { backgroundColor: 'powderblue', marginTop: insets.top },
// //         }}
// //       >
// //         <Tab.Screen
// //           name="HomeScreen"
// //           component={HomeScreen}
// //           options={{ tabBarLabel: 'Home' }}
// //         />
// //         <Tab.Screen
// //           name="WriteScreen"
// //           component={WriteScreen}
// //           options={{ tabBarLabel: 'Post' }}
// //         />
// //         <Tab.Screen
// //           name="ProfileScreen"
// //           component={ProfileScreen}
// //           options={{ tabBarLabel: 'Profile' }}
// //         />
// //       </Tab.Navigator>
// //     );
// //   }

// const Tabs = createMaterialTopTabNavigator(
//     {
//       HomeScreen: {
//         screen: HomeScreen,
//         navigationOptions: {
//           tabBarLabel: ({tintColor}) => (
//             <View style={styles.iconCOntainer}>
//               <Icon name="ios-home" color={tintColor} size={22} />
//               <Text style={{color: tintColor}}>Home</Text>
//             </View>
//           ),
//         },
//       },
//       ProfileScreen: {
//         screen: ProfileScreen,
//         navigationOptions: {
//           tabBarLabel: ({tintColor}) => (
//             <View style={styles.iconCOntainer}>
//               <Icon name="ios-person" color={tintColor} size={22} />
//               <Text style={{color: tintColor}}>Profile</Text>
//             </View>
//           ),
//         },
//       },
//       ProfileScreen: {
//         screen: ProfileScreen,
//         navigationOptions: {
//           tabBarLabel: ({tintColor}) => (
//             <View style={styles.iconCOntainer}>
//               <Icon name="ios-person" color={tintColor} size={22} />
//               <Text style={{color: tintColor}}>Settings</Text>
//             </View>
//           ),
//         },
//       },
//     },
//     {
//       initialRouteName: 'HomeScreen',
//       lazyLoad: true,
//       tabBarPosition: 'top',
//       swipeEnabled: true,
//       tabBarOptions: {
//         style: {
//           height: 70,
//           backgroundColor: '#40404c',
//           paddingBottom: 3,
//           paddingTop: 3,
//         },
//         indicatorStyle: {
//           backgroundColor: '#fff',
//           elevation: 10,
//         },
//         activeTintColor: '#fff',
//         inactiveTintColor: 'gray',
//       },
//     },
//   );

// const MainScreenNavigator = createStackNavigator({
//     Tabs: {
//       screen: Tabs,
//       navigationOptions: {
//         title: 'My App',
//         headerStyle: {
//           backgroundColor: '#2b2b39',
//         },
//         headerTitleStyle: {
//           color: '#fff',
//         },
//       },
//     },
//   });
  
// export default createAppContainer(MainScreenNavigator);

// const styles = StyleSheet.create({
//     iconCOntainer: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       alignContent: 'center',
//     },
// });