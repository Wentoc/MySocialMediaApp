import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, KeyboardAvoidingView } from 'react-native';
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

  signin=()=>{
      
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={this.state.email}
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
            <TouchableOpacity style={styles.button} onPress={()=>this.signin()}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
});