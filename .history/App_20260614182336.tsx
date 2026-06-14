import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';




export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  
  const randomInteger(min, max){
    return Math
  }
  const addTodo = (title: string) => {
    const todo = {id: 1, title: title}
    setTodoList([...todoList, todo])
  }

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
