import * as React from 'react';
import { 
  Text, 
  View, StyleSheet, 
  Image, Alert, ToastAndroid, 
  Switch, EdgeInsetsPropType, TouchableOpacity,
  ScrollView, AppRegistry, StatusBar, Platform, SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { Dimensions } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens && Components
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import VideoScreen from './screens/VideoScreen';
import MapScreen from './screens/MapScreen';
import TabNavigator from './screens/TabNavigator';
import Test from './screens/Test';

import StackNavigate from './screens/StackNavigate';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

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
            <StackNavigate />
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#212121'
  },
  headerBar:{
    width: '100%',
    height: 150 ,
    backgroundColor: '#ffffff', //38e1ff
    flexDirection: 'column',
    // borderBottomLeftRadius: 30,
    marginTop: 0
  },
});

registerRootComponent(App);
// AppRegistry.registerComponent('App', () => App);