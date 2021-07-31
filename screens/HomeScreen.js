import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, RefreshControl, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-navigation';
import { StatusBar } from 'react-native';
import Header from '../component/Header';
import WriteScreen from './WriteScreen';
import ProfileScreen from './ProfileScreen';

const width = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loading: true
    };
  }
  
  componentDidMount() {
    // When App gets Loaded
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>{/* <Header/> */}
            <ScrollView
              showsHorizontalScrollIndicator={false}
              invertStickyHeaders={false}
              horizontal={true}
              scrollEventThrottle={16}
            >
              <View style={styles.allPostContainer}>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
                <View style={{width: (Dimensions.get('window').width - 25), height: (Dimensions.get('window').height - 285),  backgroundColor: "lightgreen", borderRadius: 30, marginTop: -90, marginLeft: 15}}><Text style={{color: "#fff"}}>1</Text></View>
              </View>
            </ScrollView>

            {/* <ScrollView showsVerticalScrollIndicator={false} vertical>
              <View style={{ marginTop: 20 }}>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
                <View style={{width:"95%", height: 100, alignSelf: 'center', backgroundColor: "#90ceeb", marginTop: 10, borderRadius: 10}}></View>
              </View>
            </ScrollView> */}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
    },
    headerBar:{
      width: '10%',
      height: 0,
      backgroundColor: '#F8F0F0',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#000000', 
      borderBottomWidth: 0.5
    },
    allPostContainer:{
      alignSelf: 'center',
      marginTop: 2,
      flexDirection: 'row',
      marginLeft: -2
    },
  });
  
      {/* <LinearGradient
          colors={['#05FFFF', '#056AFF', '#D605FF']}
          style={{
            backgroundColor: '#000',
            position: 'absolute',
            top: 0,
            height: 100,
            width: '100%',
          }}
          >             
        <Text style={{textAlign: 'center', marginTop: 60, fontWeight: 'bold', fontSize: 20}}>Social App</Text>
     </LinearGradient> */}