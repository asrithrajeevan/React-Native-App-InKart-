import { Dimensions, StyleSheet } from "react-native";
import color from "../common/colors";

const style = (height, width, portrait) => StyleSheet.create({
    container : {
        width:'100%',
        backgroundColor:color.primaryGreen,
        height: portrait? width*0.22 : width*0.11, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        paddingVertical:width*0.025,
        padding:width*0.025,
    },
    touchContainer : {
        justifyContent:'center',
        alignItems:'center',
        marginLeft:width*0.045,
        marginRight:width*0.045,
        flexDirection:'column',
        marginBottom:20
    },
    iconStyle : {
        width: portrait? width*0.069 : width*0.3,
        height: portrait? width*0.069 : width*0.3,
        resizeMode:'contain', 
    },
    footerText:{
        fontFamily:'Lato-Bold', 
        fontSize: 13, 
        color:color.white,
        marginBottom:-(width*0.030),
    },
    dotStyle : {   
        fontSize:50,
        color:color.EmeraldGreen,
        marginVertical : portrait?-(height*0.025) : -(height*0.052),
        marginTop: portrait?-(width*0.08) : -(width*0.019),
    },
    cartCountView:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        backgroundColor:color.red,
        position:'absolute',
        right:-7,
        top:-5,
        padding:2,
        borderRadius:15,
        paddingHorizontal:5,
        zIndex:9
    },
    count:{
        fontFamily:'Lato-Black',
        color:color.white
    }
    
})

export default style