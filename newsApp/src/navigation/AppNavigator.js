import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';

{/*import the Developer Created Component */}
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

{/*Initialize the Navigator as Constant */}
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

{/*function for Home Navigation */}
function HomeNavigator() {
    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="NewsList" 
        component={NewsListScreen}
        options={{title: 'All News'}}
        />
        <Stack.Screen 
        name="NewsDetails" 
        component={NewsDetailsScreen}
        options={{title: 'News Details'}}
         />
        </Stack.Navigator>
    );
}//end of the Home Navigator function

{/*function for Favorites navigation */}
function FavoritesNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    );
}//end of the FavoritesNavigator

{/*Define Navigator function */}
function AppNavigator() {
    return(
        <NavigationContainer>
           <Tabs.Navigator
           screenOptions={({route}) => ({
               tabBarIcon:() => {
                   let iconName;
                   if(route.name=="Home"){
                       iconName = "home"
                   } else if(route.name=="Favorites"){
                       iconName = "favorite"
                   }

                   return <MaterialIcons name={iconName} size={24} />
               }
           })}
           >
               <Tabs.Screen name="Home" component={HomeNavigator} />
               <Tabs.Screen name="Favorites" component={FavoritesNavigator} />
           </Tabs.Navigator>
        </NavigationContainer>
    );
}

{/*export component for output */}
export default AppNavigator;