import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

import Header from './src/components/Header';

export default function App() {

  /**state define */
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

/**array function */
  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  }//end of the array function

  return (
    <View>
    {/* include Header file */}
    <Header title="Todo List"/>

    {/*starting main page component */}
      <View style={(styles.container)}>
      <View>
        <TextInput
         placeholder="Enter Todo Item"
           style={styles.textInput}
           onChangeText = {text => setTodoItem(text)}
           value = {todoItem}
         />
        <Button
          title="Add Todo"
          onPress={addTodoList}
        />
      </View>
      {/*Start Rendaring the React Item */}
      <View>
        <ScrollView>
        {todoList.map(todo => <View key={todo} style={styles.todoItem}>
        <Text>{todo}</Text>
        </View>)}
        </ScrollView>
      </View>
      {/*end of Rendaring the React Item */}
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  textInput:{
    padding:10,
    borderColor:'#000000',
    marginBottom:10,
    borderWidth:1,
  },
  todoItem:{
    marginTop:10,
    padding:20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth:1,
    borderColor: 'gray',
  }
});
