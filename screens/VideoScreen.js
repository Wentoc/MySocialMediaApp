import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, 
    Image, ImageBackground, 
    Platform, SafeAreaView, 
    TouchableOpacity, StatusBar
} from 'react-native';

export default class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <SafeAreaView style={styles.androidSav}/>
        <Text> VideoScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       ...StyleSheet.absoluteFillObject
   },
   androidSav: {
       marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
   }
})