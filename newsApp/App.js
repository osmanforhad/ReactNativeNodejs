import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
//import AppLoading from 'expo-app-loading';
//import {AppLoading} from 'expo'

{/*import the Developer Created component */}
import Header from './src/components/Header';
import Card from './src/components/Card';

{/*function for load the font */}
const loadFonts = () => {
  return Font>loadAsync({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });
}

{/*export component for output */}
export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);
  // if(!fontLoaded){
  //   return(
  //     <AppLoading
  //         startAsync={this.loadFonts}
  //         onFinish={() => this.setFontLoaded({ isReady: true })}
  //         onError={console.warn}
  //       />
  //   );
  // }

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
