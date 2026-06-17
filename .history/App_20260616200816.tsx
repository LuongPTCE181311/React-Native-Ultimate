
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  }

  return (
    // <Flexbox />
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
    //   <View style={styles.container}>
        
    //     <InputTodo addTodo={addTodo}/>
    //     <ListTodo todoList={todoList} deleteTodo={deleteTodo}/>
    //   </View>
    // </TouchableWithoutFeedback>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
