import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DataDragon} from "./src/api/endpoints/DataDragon";
import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  DataDragon.updateVersion();

  return (
    <RootNavigator />
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
