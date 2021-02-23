import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

{/*import the Developer Created Component */}
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

{/*Initialize the Navigator as Constant */}
const Stack = createStackNavigator();

{/*Define Navigator function */}
function AppNavigator() {
    return(
        <NavigationContainer>
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
        </NavigationContainer>
    );
}

{/*export component for output */}
export default AppNavigator;