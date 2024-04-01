import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import axiosInstance from "../config/axiosConfig";



export default function AuthVerify({navigation}){
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    const Authenticate = async() => {
        setErrorMsg('');
        setIsLoading(true);
        try {
            const response = await axiosInstance.get('/api/auth/');
            setIsLoading(false);
            if(response.status === 200){
                navigation.replace('Profile');
            } else {
                navigation.replace('Login');
            }
        } catch (error) {
            setIsLoading(false);
            if(error.response){
                if(error.response.data && error.response.data.message){
                    setErrorMsg(error.response.data.message);
                } else {
                    setErrorMsg(error.response.status + error.message);
                }
            } else if(error.request){
                setErrorMsg(error.message);
            }
        }
    }

    useEffect(()=>{
        Authenticate();
    }, [])



    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#333'}}>
            {isLoading && <ActivityIndicator size="large" color="#ffffff" />}
            {errorMsg && <Text style={{color:'#ffffff', fontSize:17, padding:10}}>{errorMsg}</Text>}
        </View>
    )
}