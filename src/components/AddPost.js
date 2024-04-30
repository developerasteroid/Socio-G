import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import BottomNavigation from "./BottomNavigation";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';



export default function AddPost(){
    const [bottomNavigationHeight, setBottomNavigationHeight] = useState(0);

    const UploadPost = async(mode) => {
        try {

            let result = {};
            if(mode === "gallery"){
                await ImagePicker.requestMediaLibraryPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    // allowsEditing: true,
                    // aspect:[1,1],
                    quality: 1,
                });
            } else {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                    allowsEditing: true,
                    // aspect:[1, 1],
                    quality: 1,
                });
            }

            if(!result.canceled) {
                //save image
                console.log(result);

            }
        } catch (error) {
            alert("Error uplaoding image: " + error.message);
        }
    }







    return(
        <View style={[styles.mainContainer, {paddingBottom: bottomNavigationHeight}]}>
            <Text style={styles.newPostTxt}>New Post</Text>
            {/* <Image
                source={require('./../../assets/media-planning.png')}
                style={styles.stickerImg}
            /> */}
            <View style={styles.subMainBx}>
                <View style={styles.optionsContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.optionBtn} onPress={()=>{UploadPost("camera")}}>
                    <Image
                        source={require('./../../assets/camera-image.jpg')}
                        style={styles.optionImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.optionBtn} onPress={()=>{UploadPost("gallery")}}>
                    <Image
                        source={require('./../../assets/gallery-image.jpg')}
                        style={styles.optionImg}
                    />
                </TouchableOpacity>
                </View>
            </View>

        <BottomNavigation componentHightSetter={setBottomNavigationHeight}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:'#000',
        paddingTop:(StatusBar.currentHeight || 40),
        // justifyContent:'center',
        alignItems:'center'
    },
    newPostTxt:{
        color:'#dddddd',
        fontSize:28,
        fontWeight:'bold',
        marginTop:20
    },
    stickerImg:{
        width:256,
        height:256,
        opacity:0.8
    },
    subMainBx:{
        flex:1,
        justifyContent:'center'
    },
    optionsContainer:{
        flexDirection:'row',
        columnGap:40,
        marginVertical:0,
    },
    optionBtn:{
        borderWidth:3,
        borderBottomColor:'#ff00ff',
        borderLeftColor:'#ffff00',
        borderRightColor:'#dd4433',
        borderTopColor:'#32aa4c',
        borderRadius:54,
        overflow:'hidden',
        padding:1
    },
    optionImg:{
        width:100,
        height:100,
        borderRadius:50
    }
});