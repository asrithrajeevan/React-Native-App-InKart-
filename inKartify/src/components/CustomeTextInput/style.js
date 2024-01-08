import { Platform, StyleSheet } from "react-native";
import color from "../common/colors";

const styles = (height, width, portrait) => StyleSheet.create({
    textInput : {
        color : color.black_level_3,
        fontSize : 16,
        fontFamily : 'Lato-Regular',
        width : '87%',
    },
    container: {
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'space-between',
        backgroundColor : color.lightGreen,
        padding : Platform.OS=='ios'? portrait? width * 0.0341 : width * 0.021 : width * 0.01, 
        borderRadius : 10,
        marginVertical : 10,
        borderColor : 'grey',
        borderWidth : 1,
    },
    emailIcon : {
        width : 18,
        height : 18,
        marginRight : 10,
    },
    checkText:{
        fontFamily:'Lato-Bold',
        color:color.primaryGreen,
        fontSize:15,
        fontWeight:'800',
    }
})

export default styles