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
} from 'react-native';
// import db from '../config.js';
// import * as firebase from 'firebase';
import { Feather } from 'react-native-vector-icons';
import { AntDesign } from 'react-native-vector-icons';
import { Header } from 'react-native-elements/dist/header/Header';
import { MaterialIcons } from 'react-native-vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Bold } from 'react-native-feather';
import TextInput from 'react-native-textinput-with-icons';
import { Hideo } from 'react-native-textinput-effects';
import _ from 'lodash';
import LoginScreen from './LoginScreen';
import { Makiko } from 'react-native-textinput-effects';
import { Ionicons } from 'react-native-vector-icons/Ionicons'

LogBox.ignoreLogs(['componentWillReceiveProps']);
LogBox.ignoreLogs(['componentWillMount']);

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

signup = async(emailId, password) => {
  if(emailId, password) {
    try {   
      const response = await firebase.auth().createUserWithEmailAndPassword(emailId, password);
      if(response) {
        this.props.navigation.navigate('LoginScreen')
      }
    // return Alert.alert("User Added Succesfully");
    // this.props.navigation.navigate('LoginScreen');
    // if(this.state.username.length < 0 || this.state.email.length < 0 || this.state.password.length < 0) {
    //     Alert.alert(
    //       "Oops! Fields can't be empty"
    //     )
    // }
    } catch (error) {
      console.log(error.messsage);
      switch (error.code) {
        case 'auth/user-not-found':
            Alert.alert(
                "Oops!",
                "User not found, please signup",
                [
                  {
                    text: "Signup",
                    onPress: ()=>{this.props.navigation.navigate('SignUp')}
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
      // return Alert.alert(
      //   "User created successfully",
      //   "Now login to your account to experience the next generation of our app",
      //   [
      //     {
      //       text: "Next",
      //       onPress: () => this.props.navigation.navigate('LoginScreen')
      //     }
      //   ]
      // );
    }
  

  usernameRegister = async() => {
    const users = await db.firebase();
      users.collection('Users')
      .add({
        dateOfCreation: firebase.firestore.Timestamp.now().toDate(),
        username: this.state.username
      })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {/* <ActivityIndicator size="large" color="#00ff00" /> */}
        <SafeAreaView/> 
        {/*  style={styles.androidsav} */}
          {/* <ImageBackground
            source={require('../assets/bg4.gif')}
            resizeMode="cover"
            resizeMethod="resize"
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
              height: "100%",
              // position: 'absolute', top: 0, left: 0
            }}
          > */}
          {/* <Image
            source={require('../assets/headeranimation.gif')}
            style={{
              width: 150,
              height: 150,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 150,
              marginLeft: -100
            }}
          /> */}
        <ImageBackground
         source={require('../assets/bg2.png')}
         style={{
           width: "100%",
           height: "60%",
           resizeMode: "cover"
         }}
        >
          <View style={styles.headerTitleContainer}>
            <Text style={{fontWeight: "bold",fontSize: 30,color:'#fff', letterSpacing: 0.5}}>Hey Welcome,</Text>
            <Text style={{fontWeight: "300",fontSize: 22,color:'white', marginTop: 3}}>Create your account!</Text>
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
              {/* <TextInput
                  style={styles.inputBox1}
                  value={this.state.username}
                  onChangeText={username => this.setState({ username:username })}
                  leftIcon="person-add-outline"
                  leftIconType="ion"
                  leftIconSize={27}
                  label='  Username'
                  autoCapitalize='none'
                  // autoFocus={true}
                  placeholderTextColor="#AEB7C4"
                  inlineImageLeft="username"
                  inlineImagePadding={2}  
                  underlineColorAndroid="transparent" 
              /> */}
              {/* <Hideo
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={'white'}
                // this is used as backgroundColor of icon container view.
                iconBackgroundColor={'#f2a59d'}
                inputStyle={{ color: '#464949' }}
                style={{
                  width: 200,
                  height: 40
                }}
              /> */}
            
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

              {/* <TextInput
                  style={styles.inputBox2}
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email:email })}
                  leftIcon="mail-outline"
                  leftIconType="ion"
                  leftIconSize={27}
                  leftIconColor="#2D8EFF"
                  label='  Email'
                  autoCapitalize='none'
                  // autoFocus={true}
                  placeholderTextColor="#AEB7C4"
                  underlineActiveColor="#80FF00"
              />
              <TextInput
                  style={styles.inputBox3}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password:password })}
                  leftIcon="lock-closed-outline"
                  leftIconType="ion"
                  leftIconSize={27}
                  leftIconColor="#33FF00"
                  label='  Password'
                  secureTextEntry={true}
                  placeholderTextColor="#AEB7C4"
                  underlineActiveColor="#00FDFF"
              /> */}
              </View>
              {/* <TouchableOpacity style={styles.button} onPress={()=>this.signup(this.state.email, this.state.password)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                  <AntDesign name="arrowright" size={24} color="lightgreen" style={{
                    marginTop: 2,
                    marginLeft: 12
                  }} />
              </TouchableOpacity> , this.usernameRegister*/}
              <TouchableOpacity style={styles.examplebutton} onPress={()=>this.signup(this.state.email, this.state.password)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                  <AntDesign name="arrowright" size={30} color="#ffffff" style={{
                    marginTop: 2,
                    marginLeft: 15
                  }} />
              </TouchableOpacity>

            <View style={{
              marginLeft: 8
            }}>
              <TouchableOpacity style={styles.loginNavigate} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.loginNavigateText, {fontWeight: '600', fontSize: 16, width: 250, color: "#AEB7C4"}}>
                  Already have an account? Login 
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{marginTop: -15, marginLeft: 108}}>
                <Text style={{fontWeight: '600', color: "#2FA2FF", fontSize: 15}}>
                  Forgot Password? 
                </Text>
              </TouchableOpacity> */}
            </View>
            </View>
          <View style={styles.developerName}>
            <Text style={{ color: "#2687FF", fontSize: 20, textAlign: 'center', position: 'absolute', top: 6.5, alignSelf: 'center', }}>By Wentoc</Text>
          </View>
            {/* </ImageBackground> */}
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
});
// TextInput, 