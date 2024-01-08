import React from "react";
import { StyleSheet } from "react-native";
import color from "../common/colors";

const style = (width, height) => StyleSheet.create({
    rightIconsContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    touchContainer : {
        marginRight:15
    },
    cartImage:{
        width:30, 
        height:30,
    },
    cartCountView:{
        top:-10,
        right:-5,
        position:'absolute',
        backgroundColor:color.red,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        overflow:'hidden',
        padding:3,
        paddingHorizontal:5,
        zIndex:9,
    },
    count:{
        fontFamily:'Lato-Bold',
        color:color.white,
    },
    
})

export default style