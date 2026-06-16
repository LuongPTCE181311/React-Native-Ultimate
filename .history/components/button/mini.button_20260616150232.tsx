import { StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    },
    btnCntainer : {
        borderWidth: 1,
        borderColor: "red",
        
    }

})

const MineButton = () => {
    return (
        <View style={styles.btnCntainer}>
            <AntDesign 
                name="plus-circle" 
                size={24} color="orange" 
            />
            <Text style={styles.text}>my button</Text>
        </View>
    )
}

export default MineButton