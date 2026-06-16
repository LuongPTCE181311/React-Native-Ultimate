import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    }
})

const MineButton = () => {
    return (
        <View>
            <Text style={styles}>my button</Text>
        </View>
    )
}

export default MineButton