import React from "react";
import { StyleSheet } from "react-native";
import color from "../common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        // padding:15,
        // margin:5,
        backgroundColor:color.white,
    },
    scrollView:{
        // marginTop:0,
        marginHorizontal:10,
        marginBottom:15,
        // backgroundColor:color.FernGreen
    },
    flatListContainer:{
        width:150,
        backgroundColor:color.white_level_1,
        height:250, 
        padding:15,
        // marginVertical:10,
        margin:10,
        borderWidth:1,
        borderColor:color.EmeraldGreen, 
        borderRadius:10,
    },
    hartImage:{
        width:25,
        height:25,
        // resizeMode:'contain', 
        alignSelf:'flex-end'
    },
    itemImages :{
        width:85,
        height:85, 
        alignSelf:'center',
        marginVertical:10,
        resizeMode:'contain',
    },
    itemName:{
        fontFamily:'Lato-Black', 
        fontSize:18, 
        color:color.black_level_3
    },
    itemContent : {
        fontFamily:'Lato-Regular', 
        fontSize:15, 
        color:color.black_level_3
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    price :{
        color:color.black_level_3, 
        fontFamily:'Lato-Bold',
        fontSize:15
    },
    plusTouch:{
        padding:5,
        backgroundColor:color.EmeraldGreen,
        borderRadius:5
    },
    plus:{
        fontSize:20,
        color:color.white
    }




})

export default style