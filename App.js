import {StyleSheet, View, StatusBar, useColorScheme} from 'react-native';
import Profile from './src/components/Profile';
import Home from './src/components/Home';
import Login from './src/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage1 from './src/components/Signup/SignupPage1';
import SignupPage2 from './src/components/Signup/SignupPage2';
import PlatformIndependentDatePicker from './src/components/DatePick';
import RegisterSuccess from './src/components/Signup/RegisterSuccess';













const Stack = createStackNavigator();



export default function App() {
  
  const isDarkMode = useColorScheme() === 'dark';
  StatusBar.setBarStyle(isDarkMode?'light-content':'dark-content');
  StatusBar.setBackgroundColor('#000000c0');
  
  

  

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
          animationEnabled: false, // Disable animation
        }}
      initialRouteName='Login'
        >
        <Stack.Screen name="DatPicker" component={PlatformIndependentDatePicker} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupPage1} options={{headerShown:false}}/>
        <Stack.Screen name="SignupNext" component={SignupPage2} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    
  },
  mainContainerColorLight:{
    backgroundColor:'#ffffff',
  },
  mainContainerColorDark:{
    backgroundColor:'#000000',
  },
  mainContainer: {
    height: '100%',
    backgroundColor:'#ffffff'
  }
});
