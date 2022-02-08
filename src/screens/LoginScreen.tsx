import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Colors, Headline, TextInput, Button } from 'react-native-paper';
import Header from '../components/Header';

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePress = () => {
    console.log('Pressed')
  }

  return (
    <View style={styles.container}>
      <Header title={'Hello Word'}></Header>
      <View style={styles.formContainer}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handlePress}>
        Login
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.grey50,
  },
  formContainer: {
    padding: 16,
  },
  input: {
    marginBottom: 20
  },
  header: {
    padding: 32,
    backgroundColor: Colors.purple500,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 64
  },
  headerText: {
    fontWeight: "bold",
    color: Colors.white,
  }
}); 