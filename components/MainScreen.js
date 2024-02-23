// 
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform} from "react-native";
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import HomeTab from "./TabNavigator1/HomeTab";
import LikesTab from "./TabNavigator1/LikesTab";
import AddMediaTab from "./TabNavigator1/AddMediaTab";
import ProfileTab from "./TabNavigator1/ProfileTab";
import SearchTab from "./TabNavigator1/SearchTab";

class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        title: "Socio-G",
        headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        );
    }
}

const TabNavigator1 = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    antimationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
       style:{
        ...Platform.select({
            android:{
                backgroundColor:'white'
            }

        })
       },
                activeTintColor:'#000',
                inactiveTintColor:'#d1cece',
                showLabel:false,
                showIcon:true
    
        
    }
})

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
