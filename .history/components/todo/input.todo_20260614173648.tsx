import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create

const InputTodo = () => {

    const [name, setName] = useState<string>("");
    return (
        <>
            <View>
            <TextInput 
                keyboardType='ascii-capable'
                multiline={true}
                onChangeText={value => setName(value)}
                value={name}
                style={{
                    borderColor: "violet",
                    borderWidth: 1,
                    padding: 10
            }}/>

            <Button title='Add new' color={"green"} onPress={() => alert("tap me")}/>
            </View>
        </>
    )
}

export default InputTodo;