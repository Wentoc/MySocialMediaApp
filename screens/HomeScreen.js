import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
      return (
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          invertStickyHeaders={false}
        >
            <View style={styles.headerBar}>
              <Text style={{textAlign: "center", fontSize: 20, justifyContent: "center", alignItems: 'center',marginTop: 40}}>
                Your Feed
              </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.allPostContainer}>
                <Text style={{padding:5}}>
                  My Post
                </Text>   
                <Text>
                Lorem ipsum dolor sit amet. Est vero dolores aut incidunt aspernatur est voluptatibus quia in accusamus quia rem tenetur minima. Aut dolor doloribus non dolores obcaecati et consequatur eveniet. Non accusamus ratione adipisci nihil eos mollitia voluptates.

                A enim numquam aut dolorem voluptatum eos nobis culpa vel voluptatem quidem nam alias eius. Nam quia vero ut modi nihil eum corrupti voluptatem 33 reiciendis labore.

                Aut aperiam assumenda sit minus Quis est autem accusamus. Sit libero rerum et tenetur dolorem sed velit rerum ea iure recusandae in quia quae. Vel ullam suscipit sed alias architecto in quis vitae. Et quisquam praesentium ut Quis labore qui nemo sequi non exercitationem ullam ut distinctio omnis!
                </Text>      
                <Text style={{padding:12}}>
                  My Post
                </Text>   
                <Text>
                Lorem ipsum dolor sit amet. Est vero dolores aut incidunt aspernatur est voluptatibus quia in accusamus quia rem tenetur minima. Aut dolor doloribus non dolores obcaecati et consequatur eveniet. Non accusamus ratione adipisci nihil eos mollitia voluptates.

                A enim numquam aut dolorem voluptatum eos nobis culpa vel voluptatem quidem nam alias eius. Nam quia vero ut modi nihil eum corrupti voluptatem 33 reiciendis labore.

                Aut aperiam assumenda sit minus Quis est autem accusamus. Sit libero rerum et tenetur dolorem sed velit rerum ea iure recusandae in quia quae. Vel ullam suscipit sed alias architecto in quis vitae. Et quisquam praesentium ut Quis labore qui nemo sequi non exercitationem ullam ut distinctio omnis!
                </Text>   
                <Text>
                  My Post
                </Text>   
                <Text>
                Lorem ipsum dolor sit amet. Est vero dolores aut incidunt aspernatur est voluptatibus quia in accusamus quia rem tenetur minima. Aut dolor doloribus non dolores obcaecati et consequatur eveniet. Non accusamus ratione adipisci nihil eos mollitia voluptates.

                A enim numquam aut dolorem voluptatum eos nobis culpa vel voluptatem quidem nam alias eius. Nam quia vero ut modi nihil eum corrupti voluptatem 33 reiciendis labore.

                Aut aperiam assumenda sit minus Quis est autem accusamus. Sit libero rerum et tenetur dolorem sed velit rerum ea iure recusandae in quia quae. Vel ullam suscipit sed alias architecto in quis vitae. Et quisquam praesentium ut Quis labore qui nemo sequi non exercitationem ullam ut distinctio omnis!
                </Text>   
                <Text style={{padding:12}}>
                  My Post
                </Text>   
                <Text>
                Lorem ipsum dolor sit amet. Est vero dolores aut incidunt aspernatur est voluptatibus quia in accusamus quia rem tenetur minima. Aut dolor doloribus non dolores obcaecati et consequatur eveniet. Non accusamus ratione adipisci nihil eos mollitia voluptates.

                A enim numquam aut dolorem voluptatum eos nobis culpa vel voluptatem quidem nam alias eius. Nam quia vero ut modi nihil eum corrupti voluptatem 33 reiciendis labore.

                Aut aperiam assumenda sit minus Quis est autem accusamus. Sit libero rerum et tenetur dolorem sed velit rerum ea iure recusandae in quia quae. Vel ullam suscipit sed alias architecto in quis vitae. Et quisquam praesentium ut Quis labore qui nemo sequi non exercitationem ullam ut distinctio omnis!
                </Text>   
                <Text style={{padding:12}}>
                  My Post
                </Text>   
                <Text>
                Lorem ipsum dolor sit amet. Est vero dolores aut incidunt aspernatur est voluptatibus quia in accusamus quia rem tenetur minima. Aut dolor doloribus non dolores obcaecati et consequatur eveniet. Non accusamus ratione adipisci nihil eos mollitia voluptates.

                A enim numquam aut dolorem voluptatum eos nobis culpa vel voluptatem quidem nam alias eius. Nam quia vero ut modi nihil eum corrupti voluptatem 33 reiciendis labore.

                Aut aperiam assumenda sit minus Quis est autem accusamus. Sit libero rerum et tenetur dolorem sed velit rerum ea iure recusandae in quia quae. Vel ullam suscipit sed alias architecto in quis vitae. Et quisquam praesentium ut Quis labore qui nemo sequi non exercitationem ullam ut distinctio omnis!
                </Text>     
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
    height: 105,
    backgroundColor: '#00D2FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allPostContainer:{
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
