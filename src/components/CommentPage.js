import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image} from "react-native";

export default function CommentPage({route}){
    return (
        <View style={styles.mainContainer}>
            <Text style={{color:'#fff'}}>{route.params.pid}</Text>
            <View style={styles.commentsContainer}>
        
            </View>
            <View style={styles.cmntInptContainer}>
                <TextInput style={styles.commentInput} placeholder="Comment" placeholderTextColor='#555'></TextInput>
                <TouchableOpacity style={styles.cmntUploadImgCntainer}>
                    <Image
                        style={styles.cmntUploadImg}
                        source={require('./../../assets/upload-button-icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: StatusBar.currentHeight || 40,
        backgroundColor: '#000',
        flex:1
    },
    commentsContainer: {
        flex:1
    },
    cmntInptContainer:{
        position:'relative'
    },
    commentInput:{
        backgroundColor:'#111',
        color:'#fff',
        fontSize:15,
        paddingHorizontal:15,
        paddingVertical:15,
        
    },
    cmntUploadImgCntainer:{
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        padding:15
    },
    cmntUploadImg: {
        tintColor:'#999',
        width:24,
        height:24
    }
});