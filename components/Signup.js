import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, useColorScheme, StatusBar, DatePickerIOS, Touchable} from 'react-native';
export default function Signup(){
    const isDarkMode = useColorScheme() === 'dark';
    const bgImg = isDarkMode? require('../assets/login-bg-dark.png'): require('../assets/login-bg-light.png');
    const placeHolderColor = isDarkMode? '#444444' : '#bbb';
    //for date picker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, date) =>{
        // console.log(event['type']);
        // console.log(date);
        setShowDatePicker(false);
        setSelectedDate(date);
        setShowDatePicker(Platform.OS === 'ios');
    }

    //for status bar
    StatusBar.setBackgroundColor(isDarkMode?'#000000':'#ffffff');
    StatusBar.setBarStyle(isDarkMode?'light-content':'dark-content');
    
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
        {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display='spinner'
          maximumDate={new Date()}
          onChange={handleDateChange}
        />
      )}
            <View style={[styles.container]}>
            <Text style={[styles.txtsignup, dynamicStyle.txtcl1]}>Sign Up</Text>
            <View style={styles.bxAlrdySignIn}>
            <Text style={[styles.txtalrdyact, dynamicStyle.txxtcl2]}> Already have a account ? </Text>
            <TouchableOpacity style={{padding:0}}><Text style={[styles.btnSignin, dynamicStyle.txtcl1]}>Sign in</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Name</Text>
                <TextInput style={[styles.txtInput, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]} placeholder='Name' placeholderTextColor={placeHolderColor}/>
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Email</Text>
                <TextInput style={[styles.txtInput, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]} placeholder='Email' placeholderTextColor={placeHolderColor}/>
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Phone Number</Text>
                <View style={[styles.txtInput, dynamicStyle.brdrcl1, styles.phnNumberBox]}><Text style={[styles.phn91, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]}>+91</Text><TextInput style={[dynamicStyle.txtcl1, styles.phnInput]} placeholder='0000000000' placeholderTextColor={placeHolderColor}/></View>
            </View>
            <View>
                <Text style={[styles.txtLabel, dynamicStyle.txxtcl2]}>Date of Birth</Text>
                <TouchableOpacity onPress={()=>{setShowDatePicker(true)}}><TextInput editable={false} style={[styles.txtInput, dynamicStyle.txtcl1, dynamicStyle.brdrcl1]} value={selectedDate.toLocaleDateString('en-GB')}/></TouchableOpacity>
            </View>
            <View style={styles.nextBtnContn}>
            <TouchableOpacity style={styles.nextBtn}><Text style={styles.txtNextBtn}>Next</Text></TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
        </>
    );

    
}

const styles = StyleSheet.create({
    mainBox:{
        flex:1,
    },
    container:{
        paddingVertical:10,
        paddingHorizontal:25
    },
    txtsignup: {
        fontSize:38,
        fontWeight:'bold',
        marginTop:50,
        textAlign:'center',
        
    },
    bxAlrdySignIn:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        marginBottom:25,
        justifyContent:'center'
    },
    txtalrdyact:{
        fontWeight:'500'
    },
    btnSignin:{
        fontWeight:'800'
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
    phnNumberBox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    phn91:{
        marginRight:5,
        paddingRight:5,
        borderRightWidth:2
    },
    phnInput:{
        flex:1
        
    },
    nextBtnContn:{
        marginTop:40,
    },
    nextBtn:{
        backgroundColor:'#1f7eff',
        padding:8,
        borderRadius:20,
        
    },
    txtNextBtn:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
    }
});
