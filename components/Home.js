import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, FlatList, RefreshControl, Dimensions} from 'react-native'
import { useState, useEffect } from 'react'
export default function Home(){
    const [isRefresh, setIsRefresh] = useState(false);

    const [storyData, setStoryData] = useState([]);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    // useEffect(() => {
    //     const updateScreenWidth = () => {
    //       setScreenWidth(Dimensions.get('window').width);
    //     };
        
    
    //     Dimensions.addEventListener('change', updateScreenWidth);
    
    //     // Clean up event listener on component unmount
    //     return () => {
    //       Dimensions.removeEventListener('change', updateScreenWidth);
    //     };
    //   }, []);




    

    const fetchData = () =>{
        setIsRefresh(true)
        setStoryData([
            {
                name:'Suman',
                image:'https://picsum.photos/800/1000',
                width:'800',
                height:'1000',
                caption:"Hey this is my caption"
            },
            {
                name:'Satwik',
                image:'https://picsum.photos/400/550',
                width:'400',
                height:'550'
            },
            {
                name:'Ashwith',
                image:'https://picsum.photos/400/500',
                width:'400',
                height:'500'
            },
            {
                name:'Athmik',
                image:'https://picsum.photos/400/580',
                width:'400',
                height:'580'
            },
            {
                name:'Suvith',
                image:'https://picsum.photos/800/600',
                width:'800',
                height:'600'
            },
            {
                name:'Rahul',
                image:'https://picsum.photos/400/400',
                width:'400',
                height:'400'
            },
            {
                name:'dhanush',
                image:'https://picsum.photos/400/620',
                width:'400',
                height:'620'
            },
            {
                name:'Nikshith',
                image:'https://picsum.photos/500/500',
                width:'500',
                height:'500'
            },
            {
                name:'Harshith',
                image:'https://picsum.photos/500/600',
                width:'500',
                height:'600'
            },
        ])
        // console.log(screenWidth)
        // setTimeout(()=>{setIsRefresh(false)}, 3000)
        setIsRefresh(false);
    }
    useEffect(() => {fetchData()}, []);




    const renderFeed = ({item}) => {
        return(
        <View style={styles.feedCard}>
            <View style={styles.feedTopBx}>
            <Image
                source={{uri:'https://picsum.photos/60/60'}}
                style={{width:32, height:32, borderRadius:20}}
            />
            <Text style={styles.feedUserName}>{item.name}</Text>
            </View>
            <Image 
            source={{uri:item.image}}
            style={{width:screenWidth, height:(item.height / (item.width / screenWidth)), resizeMode:'contain'}}
            />
            <View style={styles.feedBottomBx}>
                <View style={styles.like_cmt_shr_icn_container}>
                <Image 
                source={require('../assets/unlike-icon.png')}
                style={styles.bottomIcon}
                />
                <Image 
                source={require('../assets/comment-icon.png')}
                style={styles.bottomIcon}
                />
                <Image 
                source={require('../assets/share-icon.png')}
                style={styles.bottomIcon}
                />
                </View>
                <Text style={styles.captionTxt}>{item.name} {item.caption}</Text>
            </View>
        </View>
    )}

    return(
        <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topNavBox}>
            <Text style={styles.appTitleTxt}>Socio-G</Text>
            <TouchableOpacity style={styles.notifyBtnTouch}>
                <Image
                style={styles.notify_icon}
                source={require('../assets/notification-icon.png')}
                />
                <View style={styles.notifyCountBx}><Text style={styles.notifyCountTxt}>99</Text></View>
            </TouchableOpacity>
        </View>
        <View style={styles.feedBox}>
            <FlatList
                data={storyData}
                renderItem={renderFeed}
                refreshControl={
                    <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={fetchData}
                    />
                }
            />
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
        paddingVertical:10,
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
        position:'relative',
        padding:2
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
        minWidth:16,
        height:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        overflow:'hidden',
        // display:'none'
    },
    notifyCountTxt:{
        color:'#fff',
        fontSize:10,
        includeFontPadding:false,
        verticalAlign:'middle'
    },
    feedBox:{
        backgroundColor:'#000',
        flex:1
    },
    feedCard:{
        paddingVertical:20
    },
    feedTopBx:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        paddingBottom:5
    },
    feedUserName:{
        color:'#fff',
        fontSize:16,
        marginLeft:5
    },
    feedBottomBx:{
        paddingVertical:8
    },
    like_cmt_shr_icn_container:{
        flexDirection:'row'
    },
    bottomIcon:{
        tintColor:'#fff',
        width:26,
        height:26,
        marginHorizontal:10
    },
    captionTxt:{
        marginTop:10,
        marginHorizontal:10,
        color:'#fff'
    }
});