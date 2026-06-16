import { Pressable, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    },
    btnCntainer : {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor
    }

})

const MineButton = () => {
    return (
        <Pressable onPress={() => alert("meeee")}>
            <View style={styles.btnCntainer}>
                <AntDesign 
                    name="plus-circle" 
                    size={24} color="orange" 
                />
                <Text style={styles.text}>my button</Text>
            </View>
        </Pressable>
    )
}

export default MineButton