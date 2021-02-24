import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

{/*import the Developer Created component */}
import Card from '../components/Card';

{/*start function for Favorites Screen */}
const FavoritesScreen = props =>{

    {/*for return the item  have added to favorite */}
    const favorites = useSelector(state => state.news.favorites);

    return(
        <FlatList
        data={favorites}
        keyExtractor={item => item.url}
        renderItem={({item}) => (
          <Card 
          navigation={props.navigation} 
              title={item.title}
              image={item.urlToImage}
              description={item.description}
              url={item.url}
          />
        )}
    />
    );
}//end of the Favorites Screen function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default FavoritesScreen;