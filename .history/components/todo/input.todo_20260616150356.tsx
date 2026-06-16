import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MineButton from "../button/mini.button";
const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
    const {addTodo} = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        if(!name){
            Alert.alert(
                "invalid information",
                 "title nothing",
                [
                    {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
                )
            return;
        }
        addTodo(name);
        setName("");
    }
    return (
        <>
            <View>
            <TextInput 
                // keyboardType='ascii-capable'
                // multiline={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => setName(value)}
                value={name}
                style={styles.todoInput}/>
            
            <Button title='Add new'
              color={"blue"}
              onPress={handleAddNewTodo}
              />
            </View>
            <MineButton/>
        </>
    )
}

export default InputTodo;