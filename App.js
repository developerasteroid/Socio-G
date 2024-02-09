import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Text>Welcome to Socio-G!</Text>
=======
      <Text>Welcome to Socio-G</Text>
      <Text>Welcome to Socio-G</Text>
>>>>>>> Stashed changes
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
