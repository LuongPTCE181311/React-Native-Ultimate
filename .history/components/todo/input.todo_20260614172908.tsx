import { Button, Text, TextInput, View } from "react-native";

const InputTodo = () => {
    return (
        <>
        <View>
        <TextInput 
         keyboardType='ascii-capable'
         multiline={true}
         onChangeText={value => setName(value)}
         value={name}
         style={styles.borderInput}/>

        <Text style={styles.text} >{name}</Text>

        <Button title='Add new' color={"green"} onPress={() => alert("tap me")}/>

      </View>
        </>
    )
}

export default InputTodo;