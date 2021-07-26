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

const Tab = createMaterialTopTabNavigator();

const MyTabs = ()=> {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView horizontal={true}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#000', marginTop: -1 },
          // showLabel: false
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home', tabBarIcon:({ tintColor })=>(
            <Feather name="home" size={30} color={'#F93680'} />
          )}}
        />
        <Tab.Screen
          name="WriteScreen"
          component={WriteScreen}
          options={{ tabBarLabel: 'Post' }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
}

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
        <Header/>
        <MyTabs/>
        
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
      width: '100%',
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