import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: 'silver',
       padding:50,
       flex:1,
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'flex-start',
      }}>
    {/*making a flex box*/}
      <View style={{width:60, height:60, backgroundColor: 'red'}}>
        <Text>A</Text>
      </View>
      <View style={{width:60, height:60, backgroundColor: 'green'}}>
        <Text>B</Text>
      </View>
      <View style={{width:60, height:60, backgroundColor: 'blue'}}>
        <Text>C</Text>
      </View>
      <StatusBar style="auto" />
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
