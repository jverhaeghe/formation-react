import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View , Item , FlatList} from "react-native";
import { Colors , Card, Title,Paragraph} from "react-native-paper";
import { useStarships } from '../hook/useStarship';
import { NetworkProvider } from 'react-native-offline';

export const FeedScreen = () => {

  const query = useStarships();
  const { isLoading, isError, data, error } = useStarships()

  
   if (isLoading) {
     return <Text>Loading...</Text>
   }
 
   if (isError) {
     return <Text>Error: {JSON.stringify(error.message) }</Text>
   }
 
  

  const renderItem = ({ item }) => (
    <Card>
      <Card.Title title={item.name} />
      <Card.Content>
      <Title>{item.model}</Title>
      <Paragraph>{item.manufacturer}</Paragraph>
    </Card.Content>
    </Card>
  );

  


  return (
    <SafeAreaView style={styles.safeContainer}>
      
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title : {
    padding : 15,
    color : Colors.red100
  },
  item : {
    backgroundColor : Colors.amber100
    
  } 
});