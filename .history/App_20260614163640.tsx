import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {

  const [name, setName] = useState<string>("");

  const [todoList, setTodoList] = use
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "hoi dan it",
    age: 32
  })
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
