import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
    addTodo: () => void;
}

const InputTodo = (props: IProps) => {
    const {A}
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        alert(name);
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
              color={"green"}
              onPress={handleAddNewTodo}
              />
            </View>
        </>
    )
}

export default InputTodo;