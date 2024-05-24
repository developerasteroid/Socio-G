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

export const storeDataWithExpiry = async (key, value, ttl = 86400000) => { // ttl in milliseconds, 24 hours = 86400000 ms
  try {
    const now = new Date().getTime();
    const expiry = now + ttl;
    const data = { value, expiry };
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data with expiry', e);
  }
};

export const getDataWithExpiry = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue != null) {
      const data = JSON.parse(jsonValue);
      const now = new Date().getTime();
      if (now < data.expiry) {
        return data.value;
      } else {
        await AsyncStorage.removeItem(key); // Data expired, remove it
        return null;
      }
    }
    return null;
  } catch (e) {
    console.error('Error retrieving data with expiry', e);
  }
};
