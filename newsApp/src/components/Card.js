import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';

{/*import the Developer Created component */}
import * as newsAction from '../redux/actions/newsAction';

{/*start functional component*/}
const Card = props => {

    //initialize the useDispatch
    const dispatch = useDispatch();

    {/*define for fill favorite icon or not */}
    const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));

    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
        <View style={styles.card}>

    <View style={styles.imageWrapper}>
    <Image 
     //source={require('../../assets/images/demo-image.jpg')}
     source={{uri:props.image ? props.image : require('../../assets/images/demo-image.jpg') }}
        style={styles.image}
    />
    </View>

    <View style={styles.titleWrapper}>
        <Text style={styles.title}>
        {props.title && props.title.length > 32 ? props.title.slice(0, 32) + '...' : props.title}
        </Text>
        <MaterialIcons
         name={isFav ? 'favorite' : 'favorite-border'} 
         color="#72bcd4" 
         size={24}
             onPress={() => {
                 dispatch(newsAction.toggleFavorites(props.url))
             }}
         />
    </View>

    <View style={styles.descriptionWrapper}>
    <Text style={styles.description}>
    {props.description && props.description.length > 200 ? props.description.slice(0, 200) + '...' : props.description}
    </Text>
    </View>

    </View>
    </TouchableOpacity>
    );
}
{/*end of the functional component*/}

{/*react-native style code*/}
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#ffffff',
        height:300,
        margin:20,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius:8,
        elevation:5
    },
    imageWrapper:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow: 'hidden',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    titleWrapper:{
        height:'10%',
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        fontSize:20,
        marginTop: 10
    },
    descriptionWrapper:{
        marginTop:10
    },
    description:{
        paddingHorizontal:15
    }
})

{/*export component for output */}
export default Card;