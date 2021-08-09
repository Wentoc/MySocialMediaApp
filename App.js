import * as React from 'react';
import { 
  Text, 
  View, StyleSheet, 
  Image, Alert, ToastAndroid, 
  Switch, EdgeInsetsPropType, TouchableOpacity,
  ScrollView, AppRegistry, StatusBar, Platform,
} from 'react-native';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { registerRootComponent } from 'expo';
import { Header } from 'react-native-elements';
import { Home, Video } from 'react-native-feather';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';


// Screens && Components
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WriteScreen from './screens/WriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import VideoScreen from './screens/VideoScreen';
import MapScreen from './screens/MapScreen';
import Test from './screens/Test';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const Stack = createStackNavigator();
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
          <NavigationContainer>
            <View style={styles.container}>
              {/* <AppContainer /> */}
              <Stack.Navigator initialRouteName={HomeScreen} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
                <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
              </Stack.Navigator>

              <Tab.Navigator tabBarOptions={{
                showLabel: false,
                style: {
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 30,
                  marginhorizontal: 20,
                  // max height
                  height: 60,
                  borderRadius: 10,
                  // Shadow
                  elevation: 5,
                }
              }}>
                {
                  // Tab Screens...
                  
                }
                <Tab.Screen name={"Feed"} component={HomeScreen} options={{

                }}></Tab.Screen>
                <Tab.Screen name={"Watch"} component={VideoScreen} options={{
                  
                }}></Tab.Screen>
                <Tab.Screen name={"News"} component={NewsScreen} options={{
                  
                }}></Tab.Screen>
                <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
                  
                }}></Tab.Screen>
              </Tab.Navigator>
            </View>
          </NavigationContainer>
      );
  }
}

// const postNavigate = ({ navigation }) => {
//   this.props.navigation.navigate('WriteScreen')
// }

// const MyTabs = ({ navigation }) => {
//   // const insets = useSafeAreaInsets();
//   // const WINDOW_WIDTH = Dimensions.get('window').width;
//   return (
//     <View style={{ flex: 1, }}>
//         <View style={styles.headerBar}>
//           <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", left: 10, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
//             Hello!
//           </Text>
//         </View>

//         <Tab.Navigator
//           initialRouteName="HomeScreen"
//           activeColor="#e91e63"
//           barStyle={{ backgroundColor: 'tomato' }}
//         >
//       <Tab.Screen
//         name="Feed"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NewsScreen}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={VideoScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </View>
//   );
// }

// const switchNavigator = createSwitchNavigator({
//   // MyTabs:{screen:MyTabs},
//   SignupScreen:{screen:SignupScreen},
//   LoginScreen:{screen:LoginScreen},
//   // Test:{screen:Test},
//   // HomeScreen:{screen:HomeScreen},
// })
// const AppContainer = createAppContainer(switchNavigator);

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