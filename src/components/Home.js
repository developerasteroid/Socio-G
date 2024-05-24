import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, FlatList, RefreshControl, Dimensions, StatusBar} from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { IP_ADDRESS, PORT } from '../constants';
import axiosInstance from '../config/axiosConfig';
import BottomNavigation from './BottomNavigation';
import PostComponent from './PostComponent';



export default function Home({navigation}){
    const [isRefresh, setIsRefresh] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [bottomNavigationHeight, setBottomNavigationHeight] = useState(0);


    const [postData, setPostData] = useState([]);
    
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    let unlikedImg = require('../../assets/unlike-icon.png');
    let likedImg = require('../../assets/liked-icon.png');
    let commentImg = require('../../assets/comment-icon.png');
    let sendImg = require('../../assets/send-icon.png');

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




    

    const fetchData = async() =>{
        setIsRefresh(true);
        try{
            const response = await axiosInstance.get('api/post/serve');
            
            
            if(response.status == 200){
                let postArray = response.data;
                setPostData(postArray);
                setFetchError(false);
            } else {
                setFetchError(true);
            }
        } catch(e){
            setFetchError(true);
        }
        
        // console.log(screenWidth)
        // setTimeout(()=>{setIsRefresh(false)}, 3000)
        setIsRefresh(false);
    }
    useEffect(() => {fetchData()}, []);



    const renderFeedFooter = () => {
        return (
            <>
            {fetchError && (<View style={styles.errorContainer}>
                <Text style={styles.fetchErrorTxt}>! Something went wrong.</Text>
                <Image
                source={require('../../assets/crying.png')}
                style={{width:80, height:80}}
                />
                </View>)}
            </>
        )
    }

    const renderFeed = ({item}) => {
        return (
            <PostComponent item={item} postData={postData} setPostData={setPostData} screenWidth={screenWidth} />
        )
        return(
        <View style={styles.feedCard}>
            <View style={styles.feedTopBx}>
            <Image
                source={{uri:item.profile}}
                style={{width:32, height:32, borderRadius:20}}
            />
            <Text style={styles.feedUserName}>{item.name}</Text>
            <View style={{flex:1, alignItems: 'flex-end', paddingHorizontal: 10}}>
                <TouchableOpacity>
                <Image
                 source={require('./../../assets/dot-menu-icon.png')}
                 style={{tintColor:'#ffffff', width:18, height:18}}
                 />
                </TouchableOpacity>
            </View>
            </View>
            {
                item.category == "video" ? 
                null
                :
                <Image 
                source={{uri:item.content}}
                style={{width:screenWidth, height:(item.height / (item.width / screenWidth)), resizeMode:'contain'}}
                />
            }
            <View style={styles.feedBottomBx}>
                <View style={styles.like_cmt_shr_icn_container}>
                <TouchableOpacity onPress={async()=>{
                    if(!item.liked){
                    try {
                        const modified = postData.map((post)=> {
                            if(post._id == item._id){
                                let newData = post;
                                newData.liked = true;
                                return newData;
                            } else {
                                return post;
                            }
                        })
                        setPostData(modified);
                        const response = await axiosInstance.get(`api/post/like/${item._id}`)
                    } catch (error) {
                        console.log(error);
                        const modified = postData.map((post)=> {
                            if(post._id == item._id){
                                let newData = post;
                                newData.liked = false;
                                return newData;
                            } else {
                                return post;
                            }
                        })
                        setPostData(modified);
                    }
                } else {
                    try {
                        const modified = postData.map((post)=> {
                            if(post._id == item._id){
                                let newData = post;
                                newData.liked = false;
                                return newData;
                            } else {
                                return post;
                            }
                        })
                        setPostData(modified);
                        const response = await axiosInstance.get(`api/post/dislike/${item._id}`)
                    } catch (error) {
                        console.log(error);
                        const modified = postData.map((post)=> {
                            if(post._id == item._id){
                                let newData = post;
                                newData.liked = true;
                                return newData;
                            } else {
                                return post;
                            }
                        })
                        setPostData(modified);
                    }
                }
                }}>
                    <Image 
                    source={item.liked? likedImg : unlikedImg}
                    style={[item.liked ? {} : styles.bottomIconClr, styles.bottomIconSize]}
                    />
                </TouchableOpacity>
                <Image 
                source={commentImg}
                style={[styles.bottomIconClr, styles.bottomIconSize]}
                />
                {/* <Image 
                source={sendImg}
                style={[styles.bottomIconClr, styles.bottomIconSize]}
                /> */}
                </View>
                <Text style={[styles.captionTxt, item.caption == ""? {display:'none'}: {display:'flex'}]}><Text style={styles.unameCaption}>{item.name}</Text> {item.caption}</Text>
                <Text style={styles.postedDate}>{item.date}</Text>
            </View>
        </View>
    )}

    return(
        <View style={[styles.mainContainer, {paddingBottom: bottomNavigationHeight}]}>
        <View style={styles.topNavBox}>
            <Text style={styles.appTitleTxt}>Socio-G</Text>
            <TouchableOpacity style={styles.notifyBtnTouch} onPress={() => navigation.navigate('aiChatHome')}>
                <Image
                style={styles.aiChatIcon}
                source={require('../../assets/ai-chat-icon.png')}
                />
                {/* <View style={styles.notifyCountBx}><Text style={styles.notifyCountTxt}>99</Text></View> */}
            </TouchableOpacity>
        </View>
        <View style={styles.feedBox}>
            <FlatList
                data={postData}
                renderItem={renderFeed}
                refreshControl={
                    <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={fetchData}
                    />
                }
                ListFooterComponent={renderFeedFooter}
            />
        </View>
        <BottomNavigation componentHightSetter={setBottomNavigationHeight}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#000',
        paddingTop: StatusBar.currentHeight || 40,
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
    aiChatIcon: {
        width:30,
        height:30
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
        marginLeft:8,
        includeFontPadding:false
    },
    feedBottomBx:{
        paddingVertical:8,
        marginHorizontal:14
    },
    like_cmt_shr_icn_container:{
        flexDirection:'row',
        gap:25
        
    },
    bottomIconClr:{
        tintColor:'#fff'
    },
    bottomIconSize:{
        width:24,
        height:24
    },
    unameCaption:{
        fontWeight:'bold'
    },
    captionTxt:{
        marginTop:10,
        color:'#fff'
    },
    postedDate:{
        color:'#777',
        fontSize:13
    },
    fetchErrorTxt:{
        color:'#ff5555',
        paddingVertical:20,
        fontSize:20
    },
    errorContainer:{
        alignItems:'center',
        paddingBottom:20
    }
});