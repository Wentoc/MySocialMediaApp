import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logout=async()=>{
    await firebase.auth().signOut().then(()=>{
      //title: "Done",
      //onPress: ()=>this.props.navigation.navigate('SignupScreen')
      Alert.Alert(
        "Oops!",
        errorMssg,
        [
          {
            title: "Done",
            onPress: ()=>this.props.navigation.navigate('SignupScreen')
          }
        ]
      );
    }).catch((error)=>{
      const errorMssg = error.message;
       Alert.Alert(
         "Oops!",
         errorMssg,
         [
           {
             title: "OK",
           }
         ]
       );
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerBar}></View> */}
        <TouchableOpacity style={styles.logoutButton} onPress={()=>this.logout()}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    headerBar:{
      width: '100%',
      height: 105,
      backgroundColor: '#38e1ff',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoutButton: {
      width: '70%',
      height: 45,
      backgroundColor: '#90ceeb',
      marginLeft: 52,
      marginTop: 400
    },
    logoutText: {
      color: '#ffffff',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 13
    }
})