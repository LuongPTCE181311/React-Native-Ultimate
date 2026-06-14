import { FlatList } from "react-native";

const styles = style
const ListTodo = () => {
    return (
        <>
        <FlatList
                style={{
                  marginTop: 20,
                  borderColor: "red",
                  borderWidth: 1,
                }}
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({item}) => {
                  return (
                    <Text key={item.id} 
                    style={styles.todo}
                    >
                      {item.title}
                    </Text>
                  )
                }}
              />
        </>
    )
}

export default ListTodo;