import { TouchableOpacity, View, Text, StatusBar } from "react-native";
import { logout } from "../utils/Functions";

export default function MenuPage() {
    return (
        <View style={{flex: 1, backgroundColor: '#000', paddingTop: StatusBar.currentHeight}}>
            <TouchableOpacity style={{padding:10, backgroundColor:'#222', marginVertical:5}} onPress={async()=>{await logout();}}>
                <Text style={{color:'#fff', textAlign:'center'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}