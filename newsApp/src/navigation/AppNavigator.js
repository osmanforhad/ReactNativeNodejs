import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

{/*import the Developer Created Component */}
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

{/*Initialize the Navigator as Constant */}
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

{/*function for Left navigation Drawer Icons Bar */}
const HeaderLeft = () => {
    const navigation = useNavigation();

    return(
        <MaterialIcons name="menu" size={24} onPress={() => {navigation.openDrawer()
        
        }} />
    );
}//end function for left navigation Drawer Icon Bar

{/*function for Home Navigation */}
function HomeNavigator() {
    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="NewsList" 
        component={NewsListScreen}
        options={{title: 'All News', headerLeft: () => <HeaderLeft />}}
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
        <Stack.Navigator
         screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    );
}//end of the FavoritesNavigator

{/*function for About navigation */}
function AboutNavigator() {
    return(
        <Stack.Navigator
         screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}
        >
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}//end of the About Screen Navigation

{/* function for Tabs navigation*/}
function TabsNavigator() {
    return(
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
    );
}//end of the TabsNavigator function

{/*Define Navigator function */}
function AppNavigator() {
    return(
        <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="News" component={TabsNavigator} />
              <Drawer.Screen name="About" component={AboutNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
}

{/*export component for output */}
export default AppNavigator;