import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >Hoidanit</Text>
      </View>
      <Text>Hello world with Pham Thanh Lương</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greenColor: {
    
  }
  text: {
    fontSize: 40,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
