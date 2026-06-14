import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {

  const [name, setName] = useState<string>("");

  const [todoList, setTodoList] = useState([
    {id: 1, title: "learn React Native"},
    {id: 2, title: "learn React.js"},
    {id: 3, title: "learn JAva"},
    {id: 4, title: "learn NodeJS"},
    {id: 5, title: "learn ExpressJS"},
    {id: 6, title: "learn C++"},
    {id: 7, title: "learn Java script"},
  ]);
  ?
  return (
    <View style={styles.container}>
      <View>
        <TextInput 
         keyboardType='ascii-capable'
         multiline={true}
         onChangeText={value => setName(value)}
         value={name}
         style={styles.borderInput}/>
        <Text style={styles.text} >{name}</Text>
      </View>

      <Button title='Add new' onPress={() => alert("tap me")}/>

      <Text style={styles.text2}>Hello world with 
        <Text style={styles.greenColor}> Phạm Thanh Lượng</Text>
      </Text>
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
  }
});
