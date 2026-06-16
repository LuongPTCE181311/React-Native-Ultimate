import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15
  }
})

interface Iprops {
    todoList: ITodo[]
}

const ListTodo = (props: Iprops) => {
    const {todoList} = props;
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
                    onPress={}
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