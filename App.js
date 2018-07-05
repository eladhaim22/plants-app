import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppMain from './src/App.js';

export default class App extends React.Component {
  
  async componentWillMount() {
    console.log('loading');
    await Expo.Font.loadAsync({
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'MaterialCommunityIcons': require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    });
  }

  render() {
    return (
      <AppMain/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
