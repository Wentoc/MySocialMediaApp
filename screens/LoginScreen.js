import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Button, 
  Text,
  Alert,
  ToastAndroid, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView, StatusBar,
  LogBox, ActivityIndicator
} from 'react-native';import { Header } from 'react-native-elements/dist/header/Header';
import HomeScreen from './HomeScreen.js';
import { Feather } from 'react-native-vector-icons';
import { AntDesign } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Bold } from 'react-native-feather';
import { Hideo } from 'react-native-textinput-effects';
import _ from 'lodash';
import SignupScreen from './SignupScreen.js';
import { Makiko } from 'react-native-textinput-effects';
import { Ionicons } from 'react-native-vector-icons/Ionicons'
// import TextInput from 'react-native-textinput-with-icons';
// import * as firebase from 'firebase';
// import db from '../config.js';

LogBox.ignoreLogs(['componentWillReceiveProps']);
LogBox.ignoreLogs(['componentWillMount']);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }

  login=async(emailId, password)=>{
      if(emailId, password) {
        try {
           const response = await firebase.auth.signInWithEmailAndPassword();
           if(response) {
               this.props.navigation.navigate('HomeScreen')
           }
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    Alert.alert(
                        "Oops!",
                        "User not found, please signup",
                        [
                          {
                            text: "Signup",
                            onPress: ()=>{this.props.navigation.navigate('SignUpScreen')}
                          },
                          {
                            text: "OK",
                          }
                        ]
                      );
                    break;
                case 'auth/invalid-email':
                    Alert.alert(
                        "Oops!",
                        "Please enter a valid email",
                        [
                          {
                            text: "OK",
                          }
                        ]
                      );
                    break;
            }
        }
      }else {
        Alert.alert(
            "Oops!",
            "Enter the Email and Password",
            [
              {
                text: "OK",
              }
            ]
          );
      }
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
          <ImageBackground
            source={require('../assets/bg2.png')}
            style={{
              width: "100%",
              height: "60%",
              resizeMode: "cover"
            }}
          >
          <View style={styles.headerTitleContainer}>
            <Text style={{fontWeight: "bold",fontSize: 30,color:'#fff', letterSpacing: 0.5}}>Hey User,</Text>
            <Text style={{fontWeight: "300",fontSize: 22,color:'white', marginTop: 3}}>Login to your account!</Text>
          </View>
        </ImageBackground>

          {/* 
           * Three TextInputs for -
           * i) Username(No)
           * ii) Email
           * iii) Password
           * 
          */}
          <View style={{
            marginTop: -240
          }}>
            <View style={{
               marginLeft: 17,
               padding: 0
            }}>
            
            <Makiko
              label={'Email'}
              iconClass={FontAwesomeIcon}
              iconName={'envelope'}
              iconColor={'#2D8EFF'}
              inputPadding={16}
              inputStyle={{ color: '#000000', fontSize: 17 }}
              style={styles.inputBox2}
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={email => this.setState({ email:email })}
              autoCapitalize='none'
            />

            <Makiko
              label={'Password'}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#2D8EFF'}
              inputPadding={16}
              inputStyle={{ color: '#000000', fontSize: 17, width: "90%" }}
              style={styles.inputBox2}
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={email => this.setState({ email:email })}
              autoCapitalize='none'
              style={styles.inputBox3}
              value={this.state.password}
              onChangeText={password => this.setState({ password:password })}
              secureTextEntry={true}
            />
          </View>

             <TouchableOpacity style={styles.examplebutton} onPress={()=>this.login(this.state.email, this.state.password)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                  <AntDesign name="arrowright" size={30} color="#ffffff" style={{
                    marginTop: 2,
                    marginLeft: 15
                  }} />
              </TouchableOpacity>

            <View style={{
              marginLeft: 8
            }}>
              <TouchableOpacity style={styles.loginNavigate} onPress={()=>this.props.navigation.navigate('SignupScreen')}>
                <Text style={styles.loginNavigateText, {fontWeight: '600', fontSize: 16, width: 250, color: "#AEB7C4"}}>
                  Don't have an account? Signup 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: -15, marginLeft: 108}}>
                <Text style={{fontWeight: '600', color: "#2FA2FF", fontSize: 15}}>
                  Forgot Password? 
                </Text>
              </TouchableOpacity>
            </View>
            </View>
          <View style={styles.developerName}>
            <Text style={{ color: "#2687FF", fontSize: 20, textAlign: 'center', position: 'absolute', top: 6.5, alignSelf: 'center', }}>By Wentoc</Text>
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  androidsav: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
      flex: 1,
      backgroundColor: '#D5F9FF', //F0F2F4, 2D2F2B
      // alignItems: 'center',
      // justifyContent: 'center'
  },
  inputBox1: {
      width: '85%',
      padding: 15,
      fontSize: 16,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: '#F1F4F8',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 0,
      height: 70,
      marginTop: 180,
      shadowColor: '#B0C6C6',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 3,
      // borderTopWidth: 0,
      // borderTopColor: 'transparent'
      // borderColor: '#0100FF',
      // borderBottomWidth: 0.5,
      // borderTopWidth: 0.5,
      // textAlign: 'center',
  },
  inputBox2: {
    width: '90%',
    padding: 15,
    fontSize: 16,
    borderTopWidth: 0,
    backgroundColor: '#F1F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    height: 70,
    marginTop: 10,
    shadowColor: '#B0C6C6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
    // alignSelf: 'center',
    borderRadius: 10,
    // borderColor: '#00FF21',
    // borderBottomWidth: 1,
    // textAlign: 'center',
    // borderBottomRightRadius: 5,
    // borderTopRightRadius: 5,
},
  inputBox3: {
    width: '90%',
    padding: 15,
    fontSize: 16,
    borderTopWidth: 0,
    backgroundColor: '#F1F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    height: 70,
    marginTop: 10,
    shadowColor: '#B0C6C6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
    borderRadius: 10,
    // display: 'flex',
    // flex: 1
    // borderColor: '#FF0000',
    // borderBottomWidth: 0.5,
    // textAlign: 'center',
    // borderBottomRightRadius: 5,
    // borderTopRightRadius: 5,
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#00A1FF',
      borderColor: '#F6820D',
      borderWidth: 0,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      width: '40%',
      height: 55,
      marginLeft: -217.5,
      flexDirection: 'row'
  },
  buttonText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 0,
      marginLeft: 80
  },
  buttonSignup: {
      fontSize: 12
  },
  loginNavigate: {
    width: 215,
    height: 50,
    backgroundColor: 'transparent',
    marginLeft: 60,
    marginTop: 0
  },
  loginNavigateText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  headerTitleContainer: {
    position: 'absolute',
    top: 100,
    left: 25
  },
  examplebutton: {
      marginTop: 25,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#00A1FF',
      borderColor: '#F6820D',
      borderWidth: 0,
      borderRadius: 10,
      width: '70%',
      height: 65,
      alignSelf: 'center',
      // marginLeft: 55,
      flexDirection: 'row',
      shadowColor: '#B0C6C6',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5,
  },
  developerName: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: "50%",
    height: 40,
    backgroundColor: "#fff",
    shadowColor: '#B0C6C6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
    borderRadius: 10,
  }
  //  container: {
  //       flex: 1,
  //       backgroundColor: '#EEF6F6',
  //       alignItems: 'center',
  //       justifyContent: 'center'
  //   },
  //   inputBox: {
  //       width: '85%',
  //       margin: 10,
  //       padding: 15,
  //       fontSize: 16,
  //       borderColor: '#d3d3d3',
  //       borderWidth: 1,
  //       textAlign: 'center',
  //       borderRadius: 5,
  //       backgroundColor: '#ffffff'
  //   },
  //   button: {
  //       marginTop: 30,
  //       marginBottom: 20,
  //       paddingVertical: 5,
  //       alignItems: 'center',
  //       backgroundColor: '#00A1FF',
  //       borderColor: '#F6820D',
  //       borderWidth: 0,
  //       borderRadius: 5,
  //       width: '85%',
  //       height: 55,
  //   },
  //   buttonText: {
  //       fontSize: 20,
  //       fontWeight: 'bold',
  //       color: '#fff',
  //       marginTop: 9
  //   },
  //   buttonSignup: {
  //       fontSize: 12
  //   },
  //   loginNavigate: {
  //     width: 250,
  //     height: 50,
  //     backgroundColor: 'transparent',
  //     marginLeft: 10
  //   },
  //   loginNavigateText: {
  //     color: '#1F2121',
  //     fontSize: 15,
  //   }
});