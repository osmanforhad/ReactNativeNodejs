import React from 'react';
import {StyleSheet} from 'react-native';

{/*import the Developer Created component */}
import Card from '../components/Card';

{/*start function for NewsList */}
const NewsListScreen = props =>{
  
    return(
      
          <Card navigation={props.navigation} />
      
    );
}//end of the NewsDetails function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default NewsListScreen;