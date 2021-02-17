import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

{/*import the Developer Created component */}
import Header from './src/components/Header';
import Card from './src/components/Card';

export default function App() {
  return (
    <View>
    
    {/*include the Developer Created Component */}
      <Header/>
      <Card/>

    </View>
  );
}

const styles = StyleSheet.create({
  
});
