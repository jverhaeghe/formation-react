import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Item,
  FlatList,
} from "react-native";
import { Colors, Card, Title, Paragraph } from "react-native-paper";
import { NetworkProvider } from "react-native-offline";

import { useStarships } from "../hook/useStarship";
import { StarshipCard } from "../components/StarshipCard";

export const FeedScreen = () => {
  const query = useStarships();
  const { isLoading, isError, data, error } = useStarships();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {JSON.stringify(error.message)}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <StarshipCard
            cost_in_credits={item.cost_in_credits}
            manufacturer={item.manufacturer}
            model={item.model}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.name}
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
  title: {
    padding: 15,
    color: Colors.red100,
  },
  item: {
    backgroundColor: Colors.amber100,
  },
});
