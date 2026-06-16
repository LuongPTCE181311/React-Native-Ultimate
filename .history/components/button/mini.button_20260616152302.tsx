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
        backgroundColor: "#ccc"
    }

})

interface IProps {
    title: string;
    onPress: any;
}

const MineButton = (props: IProps) => {
    const {title} = props;
    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1})} 
            // onPress={() => alert("meeee")}
        >
            <View style={styles.btnCntainer}>
                <AntDesign 
                    name="plus-circle" 
                    size={24} color="black" 
                />
                <Text style={styles.text}>my button</Text>
            </View>
        </Pressable>
    )
}

export default MineButton