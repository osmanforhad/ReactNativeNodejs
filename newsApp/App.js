import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

{/*import the Developer Created component */}
import Header from './src/components/Header';
import Card from './src/components/Card';

{/*export component for output */}
export default function App() {

  return (
    <View>

    {/*include the Developer Created Component */}
      <Header/>
      <Card/>

    </View>
  );
}

{/*react-native style code */}
const styles = StyleSheet.create({
  
});
