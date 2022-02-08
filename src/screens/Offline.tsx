import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useIsConnected } from "react-native-offline";

export const Offline = (props) => {
  // Add `useIsConnected()` hook
  const isConnected = useIsConnected();
  return (
    // <View>
    //   <Text>
    //     {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
    //     isConnected ? (
    // <Text>Rendered when `true`</Text>
    // ) : (
    //   <Text>Rendered when `false`</Text>
    // );
    //   </Text>
    // </View>
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: Colors.red800,
  },
});
