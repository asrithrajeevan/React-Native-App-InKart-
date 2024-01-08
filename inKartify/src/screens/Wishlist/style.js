import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (width, height) => StyleSheet.create({
    container : {
        backgroundColor : color.white_level_3,
        flex:1,
    },
    productView:{
        marginHorizontal:15,
        marginVertical:8,
        borderRadius:20,
        backgroundColor:color.white,
        flexDirection:'row',
        padding:15,
    },
    imageStyle:{
        height:80,
        width:80,
        resizeMode:'cover',
    },
    cartCountView:{
        top:-10,
        right:10,
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
    productSeconView:{
        borderLeftWidth:1,
        borderLeftColor:color.black_level_3,
        paddingLeft:10,
        marginLeft:10
    },
    title:{
        fontFamily:"Lato-Black",
        fontSize:18
    },
    desc:{
        fontFamily:"Lato-Regular",
        fontSize:15
    },
    bottomView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5,
    },
    price:{
        fontFamily:"Lato-Black",
        fontSize:15,
    },
    offView:{
        backgroundColor:color.FernGreen,
        padding:5,
        borderRadius:15,
        marginHorizontal:15,
    },
    off:{
        color:color.white,
        fontFamily:'Lato-Regular'
    },
    cartView:{
        padding:4,
        borderRadius:15,
        borderColor:color.FernGreen,
        borderWidth:1
    },
    addtoCart:{
        color:color.FernGreen
    },
    flatView:{
        marginTop:15
    },
    removeView:{
        position:'absolute', // it will stand our desired position
        top:-5,
        right:-5
        // marginLeft:-10,
    },
    removeImage:{
        width:25,
        height:25,
        
    },


})

export default style