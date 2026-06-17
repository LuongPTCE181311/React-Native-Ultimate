import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function HomeScreen(props: any) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View>
         <Button 
        title='Go to Detais'
        onPress={() => navigation.navigate("Details")}
      />
      </View>
      <Button 
        title='Go user id = 1'
        onPress={() => navigation.navigate("Details")}
      />
      <Button 
        title='Go user id = 2'
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button 
        title='Go to Home'
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
