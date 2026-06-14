import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';




export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([
    {id: 1, title: "learn React Native"},
    {id: 2, title: "learn React.js"},
    {id: 3, title: "learn JAva"},
    {id: 4, title: "learn NodeJS"},
    {id: 5, title: "learn ExpressJS"},
    {id: 6, title: "learn C++"},
    {id: 7, title: "learn Java script"},
    {id: 8, title: "learn Java script"},
    {id: 9, title: "learn Java script"},
    {id: 10, title: "learn Java script"},
    {id: 11, title: "learn Java script"},
    {id: 12, title: "learn Java script"},
  ]);
  
  return (
    <View style={styles.container}>
      
      <InputTodo />
      <ListTodo/>
    </View>
  );
}

const styles = StyleSheet.create({
  greenColor: {
    color: "green"
  },
  text: {
    fontSize: 30,
    color: "red"
  },
  text2: {
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  borderInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10
  },
 
});
