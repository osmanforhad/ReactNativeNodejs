import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

{/*import the Developer Created component */}
import NewsListScreen from './src/screens/NewsListScreen';

{/*export component for output */}
export default function App() {

  return (
    <View>

    {/*include the Developer Created Component */}
    <NewsListScreen/>

    </View>
  );
}

{/*react-native style code */}
const styles = StyleSheet.create({
  
});
