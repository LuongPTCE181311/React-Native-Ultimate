import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';




export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  
  function randomInteger(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {
    const todo = {id: randomInteger(1, 100000000), title: title}
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (id: number) => {
    const new

  return (
    <View style={styles.container}>
      
      <InputTodo addTodo={addTodo}/>
      <ListTodo todoList={todoList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
    fontSize: 60,
    color: "red",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
