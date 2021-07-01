import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, ToastAndroid, Switch, EdgeInsetsPropType, ScrollView } from 'react-native';
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
// import MainTabNavigator from './screens/router';

// const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   const insets = useSafeAreaInsets();
//   return (
//     <ScrollView >
//       <Tab.Navigator
//         initialRouteName="HomeScreen"
//         tabBarOptions={{
//           activeTintColor: '#e91e63',
//           labelStyle: { fontSize: 12 },
//           style: { backgroundColor: '#000', marginTop: -1 },
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
//     </ScrollView>
//   );
// }

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
          <View style={styles.container}>
              <View style={{
                  width: '100%', 
                  height: 80,
                  marginTop: 40, 
                  backgroundColor: '#000',
                  borderBottomColor: '#fff',
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                  padding: 10
                }}>
                    <Text style={{color: '#fff', fontWeight: '500', fontSize: 25, marginHorizontal: 10, marginTop: 15}}>
                      Social App
                    </Text>
                    {/* <Icon name="ios-settings" size={25} style={{marginHorizontal: 153, marginTop: 20}} color={'#ffffff'}/> */}
              </View>
              {/* <AppContainer/> */}
              <SignupScreen/>
          </View>
        </SafeAreaProvider>
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
          <Feather name="home" size={30} color={'#F93680'} />
          ),
        },
      },
      WriteScreen: {
        screen: WriteScreen,
        navigationOptions: {
          tabBarLabel: 'Post',
          tabBarIcon: ({ tintColor }) => (
            <Image style={{width: 65, height: 65,marginTop: -20,}} source={require('./assets/postbtn3.png')}/>
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
      tabBarOptions: {
        // activeTintColor: '#F93680',//#00FBFF
        inactiveTintColor: '#E3CBCB',
        // showLabel: false,
        style: {
          height: 58,
          backgroundColor: '#1A1818'

        }
      }
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