import { StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    },
    btnCntainer : {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        gap: 10,
        
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