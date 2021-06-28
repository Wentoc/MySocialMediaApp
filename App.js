import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, ToastAndroid } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { Header } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // ToastAndroid.SHORT("Hello")
  }

  render() {
      return (
        <View style={styles.container}>
          <AppContainer/>
        </View>
      );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Feather name="home" size={30} color={tintColor} />
          ),
        },
      },
      WriteScreen: {
        screen: WriteScreen,
        navigationOptions: {
          tabBarLabel: 'Post',
          tabBarIcon: ({ tintColor }) => (
            <Image style={{width: 70, height: 70,marginTop: -20,}} source={require('./assets/postbtn.png')}/>
          ),
        },
      },
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: 'Me',
          tabBarIcon: ({ tintColor }) => (
            <Feather name="user" size={30} color={tintColor} />
          ),
        },
      },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(TabNavigator);

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