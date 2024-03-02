//This was example content for explaining useState
import { useState } from "react";
import { Text, View } from "react-native";

export default function Login(){
    const [name, setName] = useState("suman");

    setTimeout(()=>{setName("Suvith")}, 5000);


    return(
        <>
        <View style={{flex:1,
    justifyContent:'center',
    alignItems:'center'}}>
        <Text>{name}</Text>
        </View>
        </>
    );
}