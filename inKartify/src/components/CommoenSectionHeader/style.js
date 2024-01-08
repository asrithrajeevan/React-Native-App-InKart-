import React from "react";
import { StyleSheet } from "react-native";
import color from "../common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        // margin:15,
    },
    headView : {
        // marginLeft:15,
        // marginRight:15,
        // marginTop : 15,
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headText : {
        fontSize:20, 
        fontFamily:'Lato-Bold',
        color:color.black
    },
    contentText : {
        fontSize:18, 
        fontFamily:'Lato-Regular',
        color:color.black
    },
    seeAll:{
        fontSize:18, 
        fontFamily:'Lato-Regular',
        color:color.black
    },

})

export default style