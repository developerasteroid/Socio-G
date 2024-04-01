import React from 'react';
import {StyleSheet, View, StatusBar, useColorScheme} from 'react-native';
import { navigationRef} from './src/utils/NavigationUtils';
import Profile from './src/components/Profile';
import Home from './src/components/Home';
import Login from './src/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage1 from './src/components/Signup/SignupPage1';
import SignupPage2 from './src/components/Signup/SignupPage2';
import PlatformIndependentDatePicker from './src/components/DatePick';
import SuccessScreen1 from './src/components/Signup/registerSuccessScreens/SuccessScreen1';
import SuccessScreen2 from './src/components/Signup/registerSuccessScreens/SuccessScreen2';
import AuthVerify from './src/verification/AuthVerify';
import EditProfile from './src/components/EditProfile';













const Stack = createStackNavigator();








export default function App() {
  
  const isDarkMode = useColorScheme() === 'dark';
  StatusBar.setBarStyle(isDarkMode?'light-content':'dark-content');
  StatusBar.setBackgroundColor('#000000c0');
  
  

  

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
      screenOptions={{
          animationEnabled: false, // Disable animation
        }}
      initialRouteName='SuccessScreen2'
      >
        <Stack.Screen name="AuthVerify" component={AuthVerify} options={{headerShown:false}}/>
        <Stack.Screen name="DatePicker" component={PlatformIndependentDatePicker} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupPage1} options={{headerShown:false}}/>
        <Stack.Screen name="SignupNext" component={SignupPage2} options={{headerShown:false}}/>
        <Stack.Screen name="SuccessScreen1" component={SuccessScreen1} options={{headerShown:false}}/>
        <Stack.Screen name="SuccessScreen2" component={SuccessScreen2} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
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
