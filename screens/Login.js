import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { Header } from 'react-native-elements/dist/header/Header';
import * as firebase from 'firebase';
import db from '../config.js';
import HomeScreen from './HomeScreen.js';

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
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={email => this.setState({ email:email })}
                placeholder='Email'
                autoCapitalize='none'
                autoFocus={true}
            />
            <TextInput
                style={styles.inputBox}
                value={this.state.password}
                onChangeText={password => this.setState({ password:password })}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={()=>this.login(this.state.email, this.state.password)}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginNavigate} onPress={()=>this.props.navigation.navigate('SignupScreen')}>
              <Text style={styles.loginNavigateText}>
                Dont have an account? Create one 
              </Text>
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
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#00A1FF',
        borderColor: '#F6820D',
        borderWidth: 0,
        borderRadius: 5,
        width: '85%',
        height: 55,
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
      width: 250,
      height: 50,
      backgroundColor: 'transparent',
      marginLeft: 10
    },
    loginNavigateText: {
      color: '#1F2121',
      fontSize: 15,
    }
});