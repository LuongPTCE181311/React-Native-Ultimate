import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >Hoidanit</Text>
      </View>
      <Text style={styles.text2}>Hello world with 
        <Text style={styles.greenColor}> Phạm Thanh Lượng</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greenColor: {
    color: "green"
  },
  text: {
    fontSize: 30,
    color: "red"
  },
  text2: {
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
    paddingTop: 20,
    padd
  },
});
