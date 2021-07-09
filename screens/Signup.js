import React, { Component } from 'react';
import { 
  View, 
  TextInput, 
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
} from 'react-native';
import db from '../config.js';
import * as firebase from 'firebase';
import { Feather } from 'react-native-vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native-elements/dist/header/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { Bold } from 'react-native-feather';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  signup=async(emailId, password, username)=>{
    const createUserByEmailAndPassword = await firebase.auth().createUserWithEmailAndPassword(emailId, password);
    createUserByEmailAndPassword.then((response)=>{
      // return Alert.alert("User Added Succesfully");
      // this.props.navigation.navigate('LoginScreen');
      // if(this.state.username.length < 0 || this.state.email.length < 0 || this.state.password.length < 0) {
      //     Alert.alert(
      //       "Oops! Fields can't be empty"
      //     )
      // }
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

    // db.firebase()
    //   .collection('Users')
    //   .add({
    //     dateOfCreation: firebase.firestore.Timestamp.now().toDate(),
    //     username: this.state.username
    //   })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={styles.androidsav}/>
          <View style={styles.headerTitleContainer}>
            <Text style={{fontWeight: "bold",fontSize: 30}}>Welcome,</Text>
            <Text style={{fontWeight: "bold",fontSize: 25}}>Create your account</Text>
          </View>
              <TextInput
                  style={styles.inputBox1}
                  value={this.state.username}
                  onChangeText={username => this.setState({ username:username })}
                  placeholder='Username'
                  autoCapitalize='none'
                  // autoFocus={true}
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.inputBox2}
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email:email })}
                  placeholder='Email'
                  autoCapitalize='none'
                  // autoFocus={true}
                  placeholderTextColor="#000"
              />
              <TextInput
                  style={styles.inputBox3}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password:password })}
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor="#000"
              />
              <TouchableOpacity style={styles.loginNavigate} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.loginNavigateText, {fontWeight: '600', fontSize: 16, width: 250}}>
                  Already have an account? Login 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: -10, marginLeft: -158}}>
                <Text style={{fontWeight: '600'}}>
                  Forgot Password? 
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.button} onPress={()=>this.signup(this.state.email, this.state.password)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                  <AntDesign name="arrowright" size={24} color="lightgreen" style={{
                    marginTop: 2,
                    marginLeft: 12
                  }} />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.examplebutton} onPress={()=>this.signup(this.state.email, this.state.password, this.state.username)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                  <AntDesign name="arrowright" size={30} color="lightgreen" style={{
                    marginTop: 2,
                    marginLeft: 20
                  }} />
              </TouchableOpacity>
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
      // backgroundColor: '#EEF6F6',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox1: {
      width: '85%',
      padding: 15,
      fontSize: 16,
      borderColor: '#0100FF',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      // textAlign: 'center',
      borderTopRightRadius: 15,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -55,
      height: 70,
      marginTop: 50,
  },
  inputBox2: {
    width: '85%',
    padding: 15,
    fontSize: 16,
    borderColor: '#00FF21',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    // textAlign: 'center',
    borderBottomRightRadius: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -55,
    height: 70,
},
  inputBox3: {
    width: '85%',
    padding: 15,
    fontSize: 16,
    borderColor: '#FF0000',
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    // textAlign: 'center',
    borderBottomRightRadius: 15,
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
      width: '40%',
      height: 55,
      marginLeft: -217.5,
      flexDirection: 'row'
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 0,
      marginLeft: 70
  },
  buttonSignup: {
      fontSize: 12
  },
  loginNavigate: {
    width: 215,
    height: 50,
    backgroundColor: 'transparent',
    marginLeft: -60,
    marginTop: 20
  },
  loginNavigateText: {
    color: '#1F2121',
    fontSize: 15,
  },
  headerTitleContainer: {
    position: 'absolute',
    top: 100,
    left: 25
  },
  examplebutton: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#00A1FF',
      borderColor: '#F6820D',
      borderWidth: 0,
      borderRadius: 30,
      width: '60%',
      height: 55,
      marginLeft: -10,
      flexDirection: 'row'
  }
});