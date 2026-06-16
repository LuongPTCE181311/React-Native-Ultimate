import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    }
})

const MineButton = () => {
    return (
        <View>
            <Text style={styles.text}>my button</Text>
        </View>
    )
}

export default MineButton