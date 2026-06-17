import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function HomeScreen(props: any) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={{marginVertical: 10}}>
         <Button 
        title='Go to Detais'
        onPress={() => navigation.navigate("Details")}
      />
      </View>
      <View style={{marginVertical: 10}}>
        <Button 
          title='Go user id = 1'
          onPress={() => navigation.navigate("Details", {
            userId: 1, name: "Luong"
          })}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Button 
          title='Go user id = 2'
          onPress={() => navigation.navigate("Details", {
            userId: 1, name: "Kenldur"
          })}
        />
      </View>
    </View>
  );
}

function DetailsScreen(props: any) {
  const route = useRoute();
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>user i</Text>
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
