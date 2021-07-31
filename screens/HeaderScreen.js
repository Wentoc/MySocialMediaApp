// import * as React from 'react';
// import { Text, View, StyleSheet, Image, Alert, ToastAndroid, Switch, EdgeInsetsPropType, ScrollView, AppRegistry } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
// import * as firebase from 'firebase';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Feather } from 'react-native-vector-icons';
// import { Header } from 'react-native-elements';
// import SignupScreen from './screens/SignupScreen';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import WriteScreen from './screens/WriteScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import { Home } from 'react-native-feather';

// const Tab = createMaterialTopTabNavigator();

// const MyTabs = () => {
//   const insets = useSafeAreaInsets();
//   return (
//     <View style={{ flex: 1 }}>
//         <View style={styles.headerBar}>
//           <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", marginLeft: 30, marginTop: 10 }}>Hello!</Text>
//         </View>
//       <Tab.Navigator
//         initialRouteName="HomeScreen"
//         tabBarOptions={{
//           activeTintColor: '#e91e63',
//           labelStyle: { fontSize: 12 },
//           style: { 
//             backgroundColor: '#38e1ff',
//             marginTop: -1,
//             marginTop: 0,
//             borderColor: "transparent"
//           },
//           // showLabel: false
//         }}
//       >
//         <Tab.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ tabBarLabel: 'Home', tabBarIcon:({ tintColor })=>(
//             <Feather name="home" size={30} color={'#F93680'} />
//           )}}
//         />
//         <Tab.Screen
//           name="WriteScreen"
//           component={WriteScreen}
//           options={{ tabBarLabel: 'Post' }}
//         />
//         <Tab.Screen
//           name="ProfileScreen"
//           component={ProfileScreen}
//           options={{ tabBarLabel: 'Profile' }}
//         />
//       </Tab.Navigator>
//     </View>
//   );
// }

// export default MyTabs;
// // import * as React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { Header } from 'react-native-elements';
// // // import LinearGradient from 'react-native-linear-gradient';

// // export default class HeaderScreen extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {};
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //          <Header
// //            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
// //            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
// //            rightComponent={{ icon: 'home', color: '#fff' }}
// //            style={styles.headerComponent}
// //          />
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //     container:{
// //         flex: 1,
// //         backgroundColor: '#000',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //    },
// //    headerComponent: {
// //        display: 'flex',
// //        flex: 1,
// //        width: 'auto',
// //        height: 45,
// //        marginTop: 50
// //    }
// // })

// /* ViewComponent={LinearGradient}
// LinearGradientProps={{
//   colors: ['red', 'pink'],
//   start: { x: 0, y: 0.5 },
//   end: { x: 1, y: 0.5 },
// }}*/