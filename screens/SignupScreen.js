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
  Image, Animated,
  ImageBackground,
  SafeAreaView, StatusBar,
  LogBox, ActivityIndicator, PanResponder,
} from 'react-native';
import db from '../config.js';
import Feather from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons';
import { Header } from 'react-native-elements/dist/header/Header';
import MaterialIcons from 'react-native-vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Bold from 'react-native-feather';
import TextInput from 'react-native-textinput-with-icons';
import { Hideo } from 'react-native-textinput-effects';
import _ from 'lodash';
import LoginScreen from './LoginScreen';
import { Makiko } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';
import * as firebase from 'firebase'

LogBox.ignoreAllLogs();

const FadeInView = (props) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default class Signup extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value
      });
    },
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(this.pan, { toValue: { x: 0, y: 0 } }).start();
    }
  });
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      sound: '',
      authenticated: false,
      isLoading: false
    };
  }

  async componentDidMount() {
    await this.AISpeechPlay()
  }

  // Welcome Speech for the user to get attracted
  AISpeechPlay = async() => {

    const { sound } = await Audio.Sound.createAsync(
      // require('../speech/signupspeech.mp3')
    );

    await sound.playAsync()

    this.setState({
      sound: sound
    })
  }

  signup = async(email, password) => {
    if ( email, password ) {
      try {
        const response = await db.auth().createUserWithEmailAndPassword(email, password);
        // const uReg = async(doc) => {
        //   await db.collection('Users').doc(doc)
        //   .add({
        //     username: this.state.user.username,
        //   })
        // }

        if (response) {
          this.props.navigation.navigate('LoginScreen')
        }
      } catch (error) {
        const { errCode } = error.code;
        switch (errCode) {
          case 'auth/invalid-email':
           Alert.alert("Oops!", "Invalid email");
        }
        // Alert.alert('Oops!', error.message);
        // console.log(error.message);
      }
    }
  }

  render() {
    // const { isLoading } = this.state;
    // if(this.state.isLoading) {
    //   <View style={styles.preloader}>
    //       <ActivityIndicator size="large" color="#9E9E9E"/>
    //   </View>
    // }
    
      return (
        <KeyboardAvoidingView style={styles.container}>
          {/* <ActivityIndicator size="large" color="#00ff00" /> */}
          <SafeAreaView/>
          <ImageBackground
          source={require('../assets/bg2.png')}
          style={{
            width: "100%",
            height: "60%",
            resizeMode: "cover"
          }}
          >
            <FadeInView style={styles.headerTitleContainer}>
              <Text style={{fontWeight: "bold",fontSize: 30,color:'#fff', letterSpacing: 0.5}}>Hey Welcome,</Text>
              <Text style={{fontWeight: "300",fontSize: 22,color:'white', marginTop: 3}}>Create your account!</Text>
            </FadeInView>
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
                padding: 0,
              }}
            >

              {/* <Makiko
                label={'Username'}
                iconClass={MaterialIcons}
                iconName={'person-add'}
                iconColor={'#2D8EFF'}
                inputPadding={16}
                inputStyle={{ color: '#000000', fontSize: 17, width: "90%" }}
                autoCapitalize='none'
                style={styles.inputBox1}
                value={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
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
                onChangeText={(text) => this.setState({ email: text })}
                autoCapitalize='none'
              />

              <Makiko
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={'#2D8EFF'}
                inputPadding={16}
                inputStyle={{ color: '#000000', fontSize: 17, width: "90%" }}
                autoCapitalize='none'
                style={styles.inputBox3}
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={true}
              />

            </View>

                <TouchableOpacity style={styles.examplebutton} 
                  onPress={()=>this.signup(this.state.email, this.state.password)  
                }>
                  <FadeInView>
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </FadeInView>
                    <AntDesign name="arrowright" size={30} color="#ffffff" style={{
                      marginTop: 2,
                      marginLeft: 15
                    }} />
                </TouchableOpacity>

              <FadeInView style={{
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
              </FadeInView>
              </View>

          
            <View style={styles.developerName}>
              <FadeInView>
                <Text style={{ color: "#2687FF", fontSize: 20, textAlign: 'center', position: 'absolute', top: 6.5, alignSelf: 'center', }}>By Wentoc</Text>
              </FadeInView>
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
  inputBox1: {
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
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});