import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import db from '../config'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
  }

  uploadToFirebase = async() => {
      const upload = await db.firebase();
      upload.collection('Users')
      .add({
          username: this.state.text
      })
      .then(()=>{
          Alert.alert('uploaded')
          this.setState({
              text: ''
          })
      })
      .catch((error)=>{
          Alert.alert(error.message)
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
         <TextInput
           placeholder="Enter"
           style={{ borderWidth: 1, width: 200, height: 50, borderColor: "#000", alignSelf: 'center', marginTop: 200 }}
           onChangeText={(text)=>this.setState({ text:text })}
           value={this.state.text}
         />
         <TouchableOpacity style={{
             backgroundColor: "#90ceeb",
             width: 200,
             height: 40,
             alignSelf: 'center',
             marginTop: 50
         }}
          onPress={()=>this.uploadToFirebase}
         >
             <Text style={{ textAlign: 'center', marginTop: 10 }}>Upload to Firebase!</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
