//import { isRunningInExpoGo } from "expo";
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
}from "react-native";
import { Icon } from 'native-base'
class HomeTab extends Component{
    static navigationOptions={
        tabBarIcon:({tintcolor})=>(
            <Icon name="ios-home" style={{ color:tintcolor}}/>
        )

    }

    render(){
        return(
            <View style={styles.container}>
            <Text>HomeTab</Text>
            </View>
        );
        }
    }
        
    
export default HomeTab;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});