import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [name, setName] = useState<string>("");

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
         style={styles.borderInput}/>
        <Text style={styles.text} >{name}</Text>s
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
    borderWidth: 1,
    padding: 10
  }
});
