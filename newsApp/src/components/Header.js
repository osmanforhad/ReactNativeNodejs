import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native'

{/*start functional component*/}
const Header = () => {
    return(
        <View style={styles.header}>
    <Text style={styles.title}>News App</Text>
    </View>
    );
}
{/*end of the functional component*/}

{/*react-native style code*/}
const styles = StyleSheet.create({
    header:{
        backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#ffffff',
        padding:15,
        borderBottomColor: Platform.OS === "android" ? '#ffffff' : '#72bcd4',
        borderBottomWidth:1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        color: Platform.OS === 'android' ? '#ffffff' : '#72bcd4'
    }
})

{/*export component for output */}
export default Header;