import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
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
    const articles = useSelector(state => state.news.articles);
    console.log(articles);
  
    return(
      
          <Card navigation={props.navigation} />
      
    );
}//end of the NewsDetails function

{/*style code */}
const styles = StyleSheet.create({
    
});//end of the style code

{/*export component function for output */}
export default NewsListScreen;