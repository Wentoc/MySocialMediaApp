import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerBar}></View> */}
        <Text style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 400}}>Profile Screen!</Text>
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
})