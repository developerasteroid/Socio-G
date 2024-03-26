import { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, useColorScheme, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';


export default function Login({navigation}){
    const isDarkMode = useColorScheme() === 'dark';
    const bgImg = isDarkMode? require('../../assets/login-bg-dark.png'): require('../../assets/login-bg-light.png');
    const placeHolderColor = isDarkMode? '#444444' : '#bbb';

    //form data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (Text) => {
        setUsername(Text);
    }

    const handlePasswordChange = (Text) => {
        setPassword(Text);
    }


    

    //for status bar
    // StatusBar.setBackgroundColor(isDarkMode?'#000000':'#ffffff');
    // StatusBar.setBarStyle(isDarkMode?'light-content':'dark-content');
    
    const dynamicStyle = StyleSheet.create({
        txtcl1:{
            color:isDarkMode? '#ffffff' : '#000000',
        },
        txxtcl2:{
            color:isDarkMode? '#aaaaaa' : '#565656',
        },
        brdrcl1:{
            borderColor:isDarkMode? '#aaaaaa' : '#565656',
        }
    });

    
    return(
        <>
        
        <ImageBackground source={bgImg} style={[styles.mainBox]} resizeMode='cover'>
        
      
            <View style={[styles.container]}>
            <ScrollView>
            <Text style={[styles.txtLogin, dynamicStyle.txtcl1]}>Login</Text>
            <View style={styles.bxDontSignUp}>
            <Text style={[styles.txtDontact, dynamicStyle.txxtcl2]}> Dont have a account ? </Text>
            <TouchableOpacity style={{padding:0}} onPress={()=>{navigation.replace('Signup')}}><Text style={[styles.btnCreateNew, dynamicStyle.txtcl1]}>Create new</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Username</Text>
                <TextInput 
                    style={[styles.txtInput, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]} 
                    placeholder='username' 
                    placeholderTextColor={placeHolderColor}
                    maxLength={30}
                    value={username}
                    onChangeText={handleUsernameChange}
                    />
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Password</Text>
                <TextInput 
                    style={[styles.txtInput, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]} 
                    placeholder='Password' 
                    placeholderTextColor={placeHolderColor} 
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                />
            </View>
            <View style={styles.loginBtnContn}>
            <TouchableOpacity style={styles.loginBtn}><Text style={styles.txtLoginBtn}>Login</Text></TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </ImageBackground>
        </>
    );

    
}

const styles = StyleSheet.create({
    mainBox:{
        flex:1,
        justifyContent:'center',

    },
    container:{
        paddingVertical:10,
        paddingHorizontal:25,
    },
    txtLogin: {
        fontSize:38,
        fontWeight:'bold',
        marginTop:0,
        textAlign:'center',
        
    },
    bxDontSignUp:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        marginBottom:45,
        justifyContent:'center'
    },
    txtDontact:{
        fontWeight:'500'
    },
    btnCreateNew:{
        fontWeight:'600'
    },
    txtLabel:{
        marginBottom:3,
        marginTop:20
    },
    txtInput:{
        borderWidth:2,
        borderRadius:15,
        paddingHorizontal:12,
        paddingVertical:5,
    },
    
    loginBtnContn:{
        marginTop:50,
        marginBottom:50
    },
    loginBtn:{
        backgroundColor:'#1f7eff',
        padding:8,
        borderRadius:20,
        
    },
    txtLoginBtn:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
    }
});
