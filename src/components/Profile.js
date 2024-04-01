import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar, ActivityIndicator} from 'react-native'
import { reset } from '../utils/NavigationUtils';
import { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import { IP_ADDRESS, PORT } from '../constants';


export default function Profile({navigation}){
    const [token, setToken] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [profession, setProfession] = useState(null);
    const [bio, setBio] = useState(null);
    const [profileImgUri, setProfileImgUri] = useState('');
    const [postCount, setPostCount] = useState('0');
    const [followerCount, setFollowerCount] = useState('0');
    const [followingCount, setFollowingCount] = useState('0');

    const getData = async() => {
        setToken(await AsyncStorage.getItem('token'));
        try {
            const result = await axiosInstance.get('api/user/profile/');
            if(result.status === 200 && result.data){
                setIsLoading(false);
                setUsername(result.data.username);
                setName(result.data.name);
                setIsVerified(result.data.isVerified);
                setProfession(result.data.profession);
                setBio(result.data.bio);
                setProfileImgUri(result.data.profileUri);
                setPostCount(result.data.postCount);
                setFollowerCount(result.data.followerCount);
                setFollowingCount(result.data.followingCount);

            } else {
                setIsLoading(false);
                setFetchError('Something went Wrong');
                setFetchError('Oops! Something went Wrong');
            }
        } catch (error) {
            setIsLoading(false);
            if(error.response && error.response.data && error.response.data.message){
                setFetchError(error.response.data.message);
            } else {
                setFetchError(error.message);
            }
        }
    }
        

    useEffect(()=>{
        getData();
    }, []);


    if(!username){
        return(
            <>
                <View style={styles.mainContainer}>
                    <View style={styles.loadingContainer}>
                        {isLoading && <ActivityIndicator size='large' color='#ffffff'/>}
                        {fetchError && <Text style={{color:'#ffffff'}}>{fetchError}</Text>}
                    </View>
                </View>
            </>
        );
    }



    return(
        <>
        <View style={styles.mainContainer}>
            <View style={styles.topBox}>
                <Text style={styles.username}>{username}</Text>
                <View>
                    <TouchableOpacity onPress={async()=>{await AsyncStorage.removeItem('token'); reset('Login')}}>
                    <Image
                    style={styles.menu_icon}
                    source={require('../../assets/menu-icon.png')}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileBox}>
                <View style={styles.profileSubBx1}>
                    <View>
                        <Image
                        source={{uri: `http://${IP_ADDRESS}:${PORT}/api/user/profile/image/${token}/${profileImgUri}`}}
                        style={styles.profileImg}
                        />
                    </View>
                    <View style={styles.profileCountBoxSB}>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>{postCount}</Text>
                            <Text style={styles.countsDescription}>Posts</Text>
                        </View>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>{followerCount}</Text>
                            <Text style={styles.countsDescription}>Followers</Text>
                        </View>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>{followingCount}</Text>
                            <Text style={styles.countsDescription}>Following</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profileSubBx2}>
                    <View style={styles.profileNameBox}>
                        <Text style={styles.profileNameTxt}>{name}</Text>
                        {isVerified &&
                        <Image
                        style={styles.verifiedIcon}
                        source={require('../../assets/verified-icon.png')}
                        />
                        }
                    </View>
                    <Text style={styles.professionTxt}>{profession}</Text>
                    <Text style={styles.bioTxt}>{bio}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.editProfileBtn} onPress={()=>{navigation.navigate('EditProfile')}}>
                        <Text style={styles.editProfileTxt}>Edit profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:'#000',
        paddingTop:(StatusBar.currentHeight || 40),
    },
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    topBox:{
        // backgroundColor:'#0f0',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:25,
        paddingVertical:10
    },
    username:{
        fontSize:22,
        fontWeight:'500',
        textTransform:'lowercase',
        color:'#fff'
    },
    menu_icon:{
        width:26,
        height:26,
        tintColor:'#fff'
    },
    profileBox:{
        backgroundColor:'#333',
        padding:15,
        marginHorizontal:8,
        borderRadius:18
    },
    profileImg:{
        width:60,
        height:60,
        borderRadius:30
    },
    profileSubBx1:{
        flexDirection:'row',
        alignItems:'center',
    },
    profileCountBoxSB:{
        // backgroundColor:'#fd4',
        flex:1,
        marginLeft:12,
        flexDirection:'row',
        gap:10,
        paddingVertical:3
    },
    countsBox:{
        backgroundColor:'#555',
        flex:1,
        alignItems:'center',
        padding:5,
        borderRadius:10,
        justifyContent:'center'
    },
    countsText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'700'
    },
    countsDescription:{
        fontSize:12,
        color:'#fff'
    },
    profileSubBx2:{
        // backgroundColor:'#0f0',
        paddingVertical:10
    },
    profileNameBox:{
        // backgroundColor:'#f0f',
        flexDirection:'row',
        alignItems:'center'
    },
    profileNameTxt:{
        color:'#fff',
        fontWeight:'500',
        fontSize:19,
    },
    verifiedIcon:{
        width:24,
        height:24,
        marginLeft:2
    },
    professionTxt:{
        color:'#888',
        fontSize:12,
        // marginTop:-5
    },
    bioTxt:{
        color:'#ccc',
        marginTop:6
    },
    editProfileBtn:{
        backgroundColor:'#555',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:15
    },
    editProfileTxt:{
        color:'#fff'
    }
});