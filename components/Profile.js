import {Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView} from 'react-native'
export default function Profile(){
    return(
        <>
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topBox}>
                <Text style={styles.username}>Jhon_</Text>
                <View>
                    <TouchableOpacity>
                    <Image
                    style={styles.menu_icon}
                    source={require('../assets/menu-icon.png')}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileBox}>
                <View style={styles.profileSubBx1}>
                    <View>
                        <Image
                        style={styles.profileImg}
                        source={require('../assets/male-profile.jpg')}
                        />
                    </View>
                    <View style={styles.profileCountBoxSB}>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>2k</Text>
                            <Text style={styles.countsDescription}>Posts</Text>
                        </View>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>10k</Text>
                            <Text style={styles.countsDescription}>Followers</Text>
                        </View>
                        <View style={styles.countsBox}>
                            <Text style={styles.countsText}>100</Text>
                            <Text style={styles.countsDescription}>Following</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profileSubBx2}>
                    <View style={styles.profileNameBox}>
                        <Text style={styles.profileNameTxt}>Jhon Wick</Text>
                        <Image
                        style={styles.verifiedIcon}
                        source={require('../assets/verified-icon.png')}
                        />
                    </View>
                    <Text style={styles.professionTxt}>Actor</Text>
                    <Text style={styles.bioTxt}>🌟 Versatile Hollywood talent known for captivating performances across genres| 🎭 From breakout roles to critical acclaim| 🎬 Follow their journey for the latest updates and insights.</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.editProfileBtn}>
                        <Text style={styles.editProfileTxt}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:'#000',
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