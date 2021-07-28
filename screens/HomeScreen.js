import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, RefreshControl, Platform } from 'react-native';
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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loading: true
    };
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        {/* <Header/> */}
        
            <ScrollView
              showsHorizontalScrollIndicator={false}
              invertStickyHeaders={false}
            >
              <View style={styles.allPostContainer}>
                
              </View>
            </ScrollView>
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
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 100
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