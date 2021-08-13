import * as React from 'react';
import { 
  Text, 
  View, StyleSheet, 
  Image, Alert, ToastAndroid, 
  Switch, EdgeInsetsPropType, TouchableOpacity,
  ScrollView, AppRegistry, StatusBar, Platform, SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { registerRootComponent } from 'expo';
import { Header } from 'react-native-elements';
import { Home, Video } from 'react-native-feather';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons'; 
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens && Components
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import WriteScreen from './WriteScreen';
import ProfileScreen from './ProfileScreen';
import NewsScreen from './NewsScreen';
import VideoScreen from './VideoScreen';
import MapScreen from './MapScreen';
import Test from './Test';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const TabNavigator = () => {
    return (
        <View style={{ flex: 1, width: width, height: height, backgroundColor: '#212121' }}>
            <View style={styles.headerBar}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", left: 10, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
                Hello!
              </Text>
            </View>

          {/* 
           * Bottom Tab Navigator
          */}

          {/* <Tab.Navigator initialRouteName={HomeScreen}>
            <Tab.Screen name="Feed" component={HomeScreen} />
            <Tab.Screen name="Watch" component={VideoScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator> */}
          
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Watch" component={VideoScreen} />
          </Tab.Navigator>

        </View>
    );
}

// const Tabs = createBottomTabNavigator({
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home'
//     }
//   },
//   VideoScreen: {
//     screen: VideoScreen,
//     navigationOptions: {
//       tabBarLabel: 'Videos'
//     }
//   },
//   ProfileScreen: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: 'Profile'
//     }
//   },
// },
// { 
//   initialRouteName: 'HomeScreen'
// });

const styles = StyleSheet.create({
      headerBar:{
        width: '100%',
        height: 150 ,
        backgroundColor: '#ffffff', //38e1ff
        flexDirection: 'column',
        // borderBottomLeftRadius: 30,
        marginTop: 0
      },
})

export default TabNavigator;