import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'

export default function Home(){
    return(
        <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topNavBox}>
            <Text style={styles.appTitleTxt}>Socio-G</Text>
            <TouchableOpacity style={styles.notifyBtnTouch}>
                <Image
                style={styles.notify_icon}
                source={require('../assets/notification-icon.png')}
                />
                <View style={styles.notifyCountBx}><Text style={styles.notifyCountTxt}>1</Text></View>
            </TouchableOpacity>
        </View>
        <View style={styles.statusBox}>
            
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#000',
        flex:1,
    },
    topNavBox:{
        // backgroundColor:'#f00',
        paddingLeft:18,
        paddingRight:24,
        paddingVertical:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    appTitleTxt:{
        fontSize:26,
        color:'#fff',
        fontWeight:'bold'
    },
    notifyBtnTouch:{
        position:'relative'
    },
    notify_icon:{
        tintColor:'#fff',
        width:26,
        height:26
    },
    notifyCountBx:{
        position:'absolute',
        top:0,
        right:0,
        backgroundColor:'#f00',
        width:14,
        height:14,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        overflow:'hidden'
    },
    notifyCountTxt:{
        color:'#fff',
        fontSize:7,
        includeFontPadding:false,
        verticalAlign:'middle'
    },
    statusBox:{
        backgroundColor:'#f00',
        padding:10
    }
});