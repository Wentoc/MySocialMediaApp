import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, ToastAndroid, Switch, EdgeInsetsPropType, ScrollView, AppRegistry } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { Header } from 'react-native-elements';
import SignupScreen from './screens/Signup';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import Login from './screens/Login';
import { Home } from 'react-native-feather';
import Test from './screens/Test'
// import MainTabNavigator from './screens/router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // ToastAndroid.SHORT("Hello")
  }

  render() {
      return (
        <SafeAreaProvider>
          <NavigationContainer>
            <View style={styles.container}>
                <AppContainer/>
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      );
  }
}

// const TabNavigator = createBottomTabNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ tintColor }) => (
//           <Feather name="home" size={30} color={'#F93680'} />
//           ),
//         },
//       },
//       WriteScreen: {
//         screen: WriteScreen,
//         navigationOptions: {
//           tabBarLabel: 'Post',
//           tabBarIcon: ({ tintColor }) => (
//             <Image style={{width: 65, height: 65,marginTop: -20,}} source={require('./assets/postbtn3.png')}/>
//             ),
//           },
//         },
//         ProfileScreen: {
//           screen: ProfileScreen,
//           navigationOptions: {
//             tabBarLabel: 'Me',
//             tabBarIcon: ({ tintColor }) => (
//               <Feather name="user" size={30} color={tintColor} />
//               ),
//             },
//           },
//         },
//     {
//       initialRouteName: 'HomeScreen',
//       tabBarOptions: {
//         // activeTintColor: '#F93680',//#00FBFF
//         inactiveTintColor: '#E3CBCB',
//         // showLabel: false,
//         style: {
//           height: 58,
//           backgroundColor: '#1A1818'

//         }
//       }
//   }
// );
const switchNavigator = createSwitchNavigator({
  // Test:{screen:Test},
  // SignupScreen:{screen:SignupScreen},
  // LoginScreen:{screen:LoginScreen},
  HomeScreen:{screen:HomeScreen}
})
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerBar:{
    width: '100%',
    height: 105,
    backgroundColor: '#38e1ff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// AppRegistry.registerComponent('SocialMediaAppProject', () => App);