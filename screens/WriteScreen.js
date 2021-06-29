import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class WriteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaderName: '',
      postTitle: '',
      postContent: ''
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.uploaderNameAndTitleBox}
          multiline={false}
          require={true}
          autoComplete={false}
          placeholder={"  Enter the title..."}
          placeholder={"  Enter your name..."}
          placeholderTextColor={'#ffffff'}
          onChangeText={(text)=>{
            this.setState({
              uploaderName: text
            });
          }}
        />
        <TextInput
          style={styles.uploaderNameAndTitleBox}
          multiline={false}
          require={true}
          autoComplete={false}
          autoCapitalize={false}
          placeholder={"  Enter the title..."}
          placeholder={"  Enter the title..."}
          placeholderTextColor={'#ffffff'}
          onChangeText={(text)=>{
            this.setState({
              postTitle: text
            });
          }}
        />
        <TextInput
          style={styles.uploaderContent}
          multiline={true}
          underlineColorAndroid='transparent'
          require={true}
          autoComplete={false}
          autoCapitalize={false}
          placeholder={"  Enter the title..."}
          placeholderTextColor={'#ffffff'}
          onChangeText={(text)=>{
            this.setState({
              postTitle: text
            });
          }}
        />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    uploaderNameAndTitleBox: {
      borderWidth: 1.5,
      borderColor: '#ffffff',
      color: "#ffffff",
      width: '95%',
      height: 50,
      // justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: 3,
      marginLeft: 11,
      marginTop: 20
    },
    uploaderContent: {
      borderWidth: 1.5,
      borderColor: '#ffffff',
      color: "#ffffff",
      width: '95%',
      height: 400,
      borderRadius: 3,
      marginLeft: 11,
      marginTop: 20,
      textAlignVertical: 'top'
    },
    inputContainer: {
      marginTop: 100,
    }
});