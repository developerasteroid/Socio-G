import AsyncStorage from "@react-native-async-storage/async-storage";
import { reset } from "./NavigationUtils";
import * as Crypto from 'expo-crypto';



export const logout = async() => {
    // const uid = await AsyncStorage.getItem('uid');
    // await AsyncStorage.removeItem(uid + 'recentSearch');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('uid');
    reset('Login');
}

export const selfUID = async() => {
    return await AsyncStorage.getItem('uid');
}

export const getRandomUUID = () => {
    try {
      const UUID = Crypto.randomUUID();
      return UUID;
    } catch (error) {
      console.error('Error generating random bytes:', error);
      return null;
    }
  };