import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';

const image = {uri: '../assets/icon.png'}

export default class WriteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaderName: '', // User Name
      postTitle: '', // Title of the Post
      postContent: '' // The Post content
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        {/* <View style={styles.headerContent}>
          <Text style={styles.headerContentText}>
            What's on your mind?
          </Text>
        </View> */}
        <View style={styles.inputContainer}>
        {/* <TextInput
          style={styles.uploaderNameAndTitleBox}
          multiline={false}
          require={true}
          autoFocus={true}
          placeholder={"  Enter the title..."}
          placeholder={"  Enter your name..."}
          placeholderTextColor={'#A9B1B4'}
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
          placeholder={"  Enter the title..."}
          placeholder={"  Enter the title..."}
          placeholderTextColor={'#A9B1B4'}
          onChangeText={(text)=>{
            this.setState({
              postTitle: text
            });
          }}
        /> */}
        <TextInput
          style={styles.uploaderContent}
          multiline={true}
          underlineColorAndroid='transparent'
          require={true}
          numberOfLines={10}
          placeholder={"  Type the content..."}
          placeholderTextColor={'#A9B1B4'}
          placeholderTextAlign={'center'}
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
        backgroundColor: '#EAE2E2',
    },
    uploaderNameAndTitleBox: {
      // borderWidth: 0.5,
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
      backgroundColor: '#F8F0F0',
      borderWidth: 0,
      borderColor: '#000',
      color: "#000000",
      width: '93%',
      height: 200,
      borderRadius: 3,
      marginLeft: 12.5,
      marginTop: 20,
      textAlignVertical: 'top',
      fontSize: 17,
      borderRadius: 3,
    },
    inputContainer: {
      marginTop: -5,
    },
    headerContent: {

    },
    headerContentText: {
      color: '#000',
      fontSize: 17,
      fontWeight: "900",
      fontFamily: 'Roboto',
      marginTop: 70,
      marginLeft: 12
    }
});