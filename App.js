import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VideosList, PlayersList } from './components'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />

      {/*Uncomment this if you want to see the VideosList component on the App Home Page */}
       <VideosList/>

      {/* Uncomment this if you want to see the PlayersList component on App Home Page */}
      <PlayersList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
