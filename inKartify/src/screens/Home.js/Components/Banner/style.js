import React from "react";
import { StyleSheet } from "react-native";
import color from "../../../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    banner :{
        width : width*0.89,
        height : width*0.4,
        resizeMode :'contain',
        borderRadius:20,
        overflow : 'hidden',
        margin:10,
        marginTop:0,
        marginBottom:0
    },
    innerBannerView: {
        padding:15,
    },
    head : {
        fontSize:18,
        color:color.black,
        fontFamily:'Lato-Bold'
    },
    content : {
        fontFamily:'Lato-Regular',
        fontSize:15,
        padding:1
    },
    touch:{
        width:width*0.23,
        padding:5,
        backgroundColor:color.primaryGreen,
        borderRadius:15,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    touchText: {
        fontFamily:'Lato-Bold',
        paddingVertical:5,
        color:color.white
    }
})

export default style