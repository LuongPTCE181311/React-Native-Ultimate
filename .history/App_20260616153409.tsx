import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';




export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  
  const addTodo = (title: string) => {
    const todo = {id: Date.now(), title: title}
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (id: number) => {
    const newToDo = todoList.filter(todo => todo.id != id)
    setTodoList(newToDo);
  }
  return (
    
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
    //   <View style={styles.container}>
        
    //     <InputTodo addTodo={addTodo}/>
    //     <ListTodo todoList={todoList} deleteTodo={deleteTodo}/>
    //   </View>
    // </TouchableWithoutFeedback>
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
