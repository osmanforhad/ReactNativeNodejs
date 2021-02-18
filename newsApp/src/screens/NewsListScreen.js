import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

{/*import the Developer Created component */}
import Header from '../components/Header';
import Card from '../components/Card';

{/*start function for NewsList */}
const NewsListScreen = () =>{
    return(
<View>

    {/*include the Developer Created Component */}
    <Header/>
      <Card/>

</View>
    );
}//end of the NewsList function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default NewsListScreen;