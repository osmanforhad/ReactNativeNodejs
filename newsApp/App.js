import * as React from 'react';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

{/*import the Developer Created component */}
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

{/*export component for output */}
export default function App() {
  return (
    <Provider store={store}>
    <AppNavigator />
    </Provider>
  );
}

{/*react-native style code */}
const styles = StyleSheet.create({
  
});


