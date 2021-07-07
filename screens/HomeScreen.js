import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {}

  render() {
      return (
        <ScrollView
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        invertStickyHeaders={false}
        >
            <View style={styles.container}>
              <LinearGradient
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
             </LinearGradient>
               
              <View style={styles.allPostContainer}>
                
              </View>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
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
