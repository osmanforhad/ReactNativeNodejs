import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

{/*start functional component*/}
const Card = props => {

    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
        <View style={styles.card}>

    <View style={styles.imageWrapper}>
    <Image 
     source={require('../../assets/images/demo-image.jpg')}
    // source={{uri:'https://amirconstructionbd.com/public/eqfeature/225%20Ton%20All%20Terrain%20Crane.jpg'}}
        style={styles.image}
    />
    </View>

    <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dummy Title</Text>
        <MaterialIcons name="favorite-border" color="#72bcd4" size={24}/>
    </View>

    <View style={styles.descriptionWrapper}>
    <Text style={styles.description}>This is a Dummy Description</Text>
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