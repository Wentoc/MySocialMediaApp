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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { registerRootComponent } from 'expo';
// Screens && Components
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import VideoScreen from './screens/VideoScreen';
import Test from './screens/Test';
import { TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import MainTabNavigator from './screens/router';

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

const postNavigate = ({ navigation }) => {
  this.props.navigation.navigate('WriteScreen')
}

const MyTabs = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const WINDOW_WIDTH = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerBar}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", }}>Hello!</Text>
          <Switch/>
        </View>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          style: { 
            backgroundColor: '#38e1ff', //'#38e1ff'
            marginTop: -25,
            // marginTop: 0,
            borderColor: "transparent",
            elevation: 0,
            height: 50,
            width: WINDOW_WIDTH,
            flexDirection: 'column',
            // borderWidth: 0.5,
            // borderColor: '#000',
          },
          showIcon: true,
          showLabel: false
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home', tabBarIcon:({ tintColor, focused })=>(
            <Ionicons name={focused ? "home" : "home-outline"} size={30} color={'#F93680'} style={{marginLeft: -4}}/> //'#F93680'
          )}}
        />
        {/* <Tab.Screen
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
        /> */}
        <Tab.Screen
          name="VideoScreen"
          component={VideoScreen}
          tabBarColor={'#000'}
          options={{ tabBarLabel: 'Videos', tabBarIcon:({ tintColor, focused })=>(
            <Icon
              name='ondemand-video'
              type='material'
              color='blue'
              size={35}
              style={{ 

               }}
            />
          )}}
        />
          <Tab.Screen
            name="NewsScreen"
            component={NewsScreen}
            options={{ tabBarLabel: 'News' }}
            options={{ tabBarLabel: 'News', tabBarStyle: { backgroundColor: '#000' }, tabBarIcon:({ tintColor, focused })=>(
              <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={30} color="black" />
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
      </Tab.Navigator>

      <View style={{
         position: 'absolute',
         bottom: 12,
         width: (WINDOW_WIDTH - (45)),
         height: 70,
         borderRadius: 20,
         elevation: 5,
         backgroundColor: '#90ceeb',
         alignSelf: 'center'
      }}>
        <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }} onPress={() => navigation.navigate('WriteScreen')}>
           <Image source={require('./assets/postbtn2.png')} style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              marginLeft: 25,
              marginTop: -5,
              marginLeft: 0
            }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  // Test:{screen:Test},
  // HomeScreen:{screen:HomeScreen},
  SignupScreen:{screen:SignupScreen},
  MyTabs:{screen:MyTabs},
  LoginScreen:{screen:LoginScreen},
})
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: width,
    height: height,
  },
  headerBar:{
    width: '100%',
    height: 100 ,
    backgroundColor: '#38e1ff',
    flexDirection: 'column',
  },
});

registerRootComponent(App);
// AppRegistry.registerComponent('App', () => App);