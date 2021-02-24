import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

{/*import the Developer Created component */}
import Card from '../components/Card';
import * as newsAction from '../redux/actions/newsAction';

{/*start function for NewsList */}
const NewsListScreen = props =>{


    {/*initialize the dispatch */}
    const dispatch = useDispatch();

    {/*use effect hook function for render */}
    useEffect(() => {
        dispatch(newsAction.fetchArticles())
    }, [dispatch]);

     {/*select the state which need right now */}
    const {articles} = useSelector(state => state.news.articles);
    console.log(articles);
  
    return(
      <FlatList
          data={articles}
          keyExtractor={item => item.url}
          renderItem={({item}) => (
            <Card 
            navigation={props.navigation} 
                title={item.title}
                image={item.urlToImage}
                description={item.description}
            />
          )}
      />
      
    );
}//end of the NewsDetails function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default NewsListScreen;