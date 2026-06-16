import { StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    }
})

const MineButton = () => {
    return (
        <View>
            <AntDesign name="plus-circle" size={24} color="black" />
            <Text style={styles.text}>my button</Text>
        </View>
    )
}

export default MineButton