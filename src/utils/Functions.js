import AsyncStorage from "@react-native-async-storage/async-storage";
import { reset } from "./NavigationUtils";

export const logout = async() => {
    // const uid = await AsyncStorage.getItem('uid');
    // await AsyncStorage.removeItem(uid + 'recentSearch');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('uid');
    reset('Login');
}