import * as React from 'react';
import { StatusBarIOS } from 'react-native';
import { 
  Text, View, 
  StyleSheet, 
  ScrollView, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  RefreshControl, StatusBar, 
  Platform, SafeAreaView 
 } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Bold } from 'react-native-feather';

export default class Header extends React.Component {
  render(){
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.headerBar}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#E9F0F2", marginLeft: 30, marginTop: 10 }}>Hello!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: "#14C1FF",
    width: "100%",
    height: 150,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    marginTop: -50
  },
})

{/**alignSelf: 'center',  */}