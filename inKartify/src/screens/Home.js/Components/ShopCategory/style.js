import React from "react";
import { StyleSheet } from "react-native";
import color from "../../../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        margin:10,
        marginBottom:1
    },
    head : {
        fontSize:18,
        fontFamily:'Lato-Bold',
        fontWeight:'800',
        color:color.black,
        textAlign:'center',
    },
    FlatList :{
        marginBottom:15,
        marginTop:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innerView : {
        margin:10,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    itemName : {
        fontSize:15,
        margin:5,
        fontFamily:'Lato-Regular',
        color:color.black
    },
    image : {
        width:75,
        height:75,
        resizeMode:'contain',
    },
    imageView:{
        backgroundColor:color.white,
        padding:1,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:15,
    }
})

export default style