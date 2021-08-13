import * as React from 'react';
import { 
  Text, 
  View, StyleSheet, 
  Image, Alert, ToastAndroid, Dimensions,
  Switch, EdgeInsetsPropType, TouchableOpacity,
  ScrollView, AppRegistry, StatusBar, Platform, SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// Screens && Components
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigate = () => {
    return (
       <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
       </NavigationContainer>
    );
}

export default StackNavigate;