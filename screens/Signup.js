import React, { Component } from 'react';
import { 
  View, TextInput, 
  StyleSheet, 
  Button, 
  Text,
  Alert,
  ToastAndroid, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView 
} from 'react-native';
import db from '../config.js';
import * as firebase from 'firebase';
import { Feather } from 'react-native-vector-icons';
import { Header } from 'react-native-elements/dist/header/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { Bold } from 'react-native-feather';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  signup=async(emailId, password)=>{
    const createUserByEmailAndPassword = await firebase.auth().createUserWithEmailAndPassword(emailId, password);
    createUserByEmailAndPassword.then((response)=>{
      // return Alert.alert("User Added Succesfully");
      // this.props.navigation.navigate('LoginScreen');
      return Alert.alert(
        "User created successfully",
        "Now login to your account to experience the next generation of our app",
        [
          {
            text: "Next",
            onPress: () => this.props.navigation.navigate('LoginScreen')
          }
        ]
      );
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMssg = error.message;
        return Alert.alert("We have found a problem ",errorMssg);
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
          
          {/* 
           backgroundColor: '#000',
              position: 'absolute',
              top: 0,
              height: 100,
              width: windowWidth
          */}
          {/* <View style={styles.headerUIContainer}>
            <View style={{
              width: 270,
              height: 200,
              backgroundColor: '#90ceeb',
              borderRadius: 200,
              marginTop: -300,
              marginLeft: -200,
              position: 'absolute',
              top: 0,
              border: 0
            }}></View>
            <View style={{
              width: 170,
              height: 170,
              backgroundColor: 'pink',
              borderRadius: 200,
              marginTop: -155,
              marginLeft: 40,
              position: 'absolute',
              top: 0,
              border: 0,
              zIndex: -1
            }}></View>
          </View> */}
          <View style={styles.headerTitleContainer}>
            <Text style={{fontWeight: "bold"}}>Welcome</Text>
          </View>
              <TextInput
                  style={styles.inputBox1}
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email:email })}
                  placeholder='Email'
                  autoCapitalize='none'
                  // autoFocus={true}
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.inputBox2}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password:password })}
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor="#000"
              />
              <TouchableOpacity style={styles.loginNavigate} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.loginNavigateText}>
                  Already have an account? Login 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>this.signup(this.state.email, this.state.password)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EEF6F6',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox1: {
      width: '85%',
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 0.5,
      textAlign: 'center',
      borderTopRightRadius: 40,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -55,
      height: 70,
  },
  inputBox2: {
    width: '85%',
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderTopWidth: 0.5,
    textAlign: 'center',
    borderBottomRightRadius: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -55,
    height: 70,
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
      width: '35%',
      height: 55,
      marginLeft: -240
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 9
  },
  buttonSignup: {
      fontSize: 12
  },
  loginNavigate: {
    width: 215,
    height: 50,
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginTop: 20
  },
  loginNavigateText: {
    color: '#1F2121',
    fontSize: 15,
  }
});