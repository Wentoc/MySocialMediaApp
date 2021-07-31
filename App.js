import * as React from 'react';
import { 
  Text, 
  View, StyleSheet, 
  Image, Alert, ToastAndroid, 
  Switch, EdgeInsetsPropType, 
  ScrollView, AppRegistry, StatusBar, Platform,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { Header } from 'react-native-elements';
import { Home } from 'react-native-feather';
import { Dimensions } from 'react-native';
import { registerRootComponent } from 'expo';
// Screens && Components
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import Test from './screens/Test';
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

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  const insets = useSafeAreaInsets();
  const WINDOW_WIDTH = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerBar}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", marginLeft: 20, marginTop: 10, }}>Hello!</Text>
          <Switch/>
        </View>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { 
            backgroundColor: '#38e1ff', //'#38e1ff'
            marginTop: 0,
            marginTop: 0,
            borderColor: "transparent",
            elevation: 0,
            height: 50,
            width: WINDOW_WIDTH
          },
          showIcon: true,
          showLabel: false
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home', tabBarIcon:({ tintColor })=>(
            <Feather name="home" size={30} color={'#F93680'} style={{marginLeft: -4}}/>
          )}}
        />
        <Tab.Screen
          name="WriteScreen"
          component={WriteScreen}
          options={{ tabBarLabel: 'Post' }}
          options={{ tabBarLabel: 'Post', tabBarIcon:({ tintColor })=>(
            <Image source={require('./assets/postbtn2.png')} style={{
              width: 70,
              height: 70,
              backgroundColor: tintColor,
              alignSelf: 'center',
              marginLeft: 25,
              marginTop: -20,
            }}/>
          )}}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ tabBarLabel: 'Profile' }}
          options={{ tabBarLabel: 'Me', tabBarIcon:({ tintColor })=>(
            <Feather name="user" size={30} color={'#2E46FC'} />
          )}}
        />
        <Tab.Screen
          name="NewsScreen"
          component={NewsScreen}
          options={{ tabBarLabel: 'News' }}
          options={{ tabBarLabel: 'News', tabBarIcon:({ tintColor })=>(
            <Ionicons name="newspaper-outline" size={30} color="black" />
          )}}
        />
      </Tab.Navigator>

      <View style={{
         position: 'absolute',
         bottom: 0,
         width: (WINDOW_WIDTH - (5)),
         height: 80,
         borderRadius: 30,
         elevation: 5,
         backgroundColor: '#90ceeb',
         alignSelf: 'center'
      }}>

      </View>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  // Test:{screen:Test},
  // HomeScreen:{screen:HomeScreen},
  MyTabs:{screen:MyTabs},
  SignupScreen:{screen:SignupScreen},
  LoginScreen:{screen:LoginScreen},
})
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerBar:{
    width: '100%',
    height: 105 ,
    backgroundColor: '#38e1ff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

registerRootComponent(App);
// AppRegistry.registerComponent('App', () => App);


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