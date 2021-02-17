import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native'

{/*start functional component*/}
const Card = () => {
    return(
        <View style={styles.card}>

    <View style={styles.imageWrapper}>
    <Image 
     source={require('../../assets/demo-image.jpg')}
    // source={{uri:'https://amirconstructionbd.com/public/eqfeature/225%20Ton%20All%20Terrain%20Crane.jpg'}}
        style={styles.image}
    />
    </View>

    <View style={styles.titleWrapper}>
        <Text>Dummy Title</Text>
    </View>

    <View style={styles.descriptionWrapper}>
    <Text>This is a Dummy Description</Text>
    </View>

    </View>
    );
}
{/*end of the functional component*/}

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
        paddingHorizontal:15
    },
    descriptionWrapper:{
        paddingHorizontal:15
    }
})

{/*export component for output */}
export default Card;