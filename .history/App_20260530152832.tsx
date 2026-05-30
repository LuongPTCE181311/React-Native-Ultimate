import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [name, setName] = useState<string>("Pham Thanh Luong");

  const [age, setAge] = useState<number>(30);

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
        <Text style={styles.text} >{name}</Text>
        <Text style={styles.text} >{age}</Text>
        <Text style={styles.text} >{JSON.stringify(person)}</Text>
        <TextInput style={styles.borderInput}/>
      </View>
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
    padding: 20,
  },
  borderInput: {
    borderColor: "violet",
    borderWidth
  }
});
