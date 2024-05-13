import { Image, Text, TouchableOpacity, View, StyleSheet, StatusBar } from 'react-native';
import axiosInstance from '../config/axiosConfig';
import { useState } from 'react';
import { navigate } from '../utils/NavigationUtils';

export default function PostComponent({item, postData, setPostData, screenWidth}){
    let unlikedImg = require('../../assets/unlike-icon.png');
    let likedImg = require('../../assets/liked-icon.png');
    let commentImg = require('../../assets/comment-icon.png');
    let [menuActive, setmenuActive] = useState(false);
    return(
        <View style={styles.feedCard}>
            <View style={styles.feedTopBx}>
            <Image
                source={{uri:item.profile}}
                style={{width:32, height:32, borderRadius:20}}
            />
            <Text style={styles.feedUserName}>{item.name}</Text>
            <View style={{flex:1, alignItems: 'flex-end', position:'relative', zIndex:99}}>
                {/* <TouchableOpacity
                    style={{paddingHorizontal:12, paddingVertical:8}}
                    onPress={()=>{
                        setmenuActive(!menuActive);
                    }}
                >
                <Image
                 source={require('./../../assets/dot-menu-icon.png')}
                 style={{tintColor:'#ffffff', width:18, height:18}}
                 />
                </TouchableOpacity> */}
                
            </View>
                {
                    menuActive &&
                    <View style={{backgroundColor:'#000000', position:'absolute', top:'100%', right:0, zIndex:99}}>
                        <TouchableOpacity>
                        <Text 
                        style={
                            {
                                color:'#ffffff',
                                paddingVertical:8,
                                paddingHorizontal:25,
                                fontSize:16
                            }
                        }>
                            Report post
                        </Text>
                        </TouchableOpacity>
                    </View>
                 }
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
                <TouchableOpacity onPress={()=>{
                    navigate('comment', {pid: item._id});
                }}>
                    <Image 
                    source={commentImg}
                    style={[styles.bottomIconClr, styles.bottomIconSize]}
                    />
                </TouchableOpacity>

                {/* <Image 
                source={sendImg}
                style={[styles.bottomIconClr, styles.bottomIconSize]}
                /> */}
                </View>
                <Text style={[styles.captionTxt, item.caption == ""? {display:'none'}: {display:'flex'}]}><Text style={styles.unameCaption}>{item.name}</Text> {item.caption}</Text>
                <Text style={styles.postedDate}>{item.date}</Text>
            </View>
        </View>
    )
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