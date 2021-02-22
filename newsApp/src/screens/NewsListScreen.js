import React from 'react';
import {StyleSheet, View} from 'react-native';

{/*import the Developer Created component */}
import Card from '../components/Card';

{/*start function for NewsList */}
const NewsListScreen = () =>{
    return(
<View>
  <Card/>
</View>
    );
}//end of the NewsDetails function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default NewsListScreen;