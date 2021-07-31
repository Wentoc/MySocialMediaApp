import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet, SafeAreaView, Platform, Dimensions, Image, ImageBackground } from 'react-native';

const appTitle = [
    'News',
    'News App',
    'News Feed'
];

class NewsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        title: Math.round(Math.random(appTitle))
    };
  }

  render() {
      const { title } = this.state;
    return (
      <View style={StyleSheet.container}>
        <Text style={{ alignSelf: 'center' }}> { title } </Text>
      </View>
    );
  }
}

export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})