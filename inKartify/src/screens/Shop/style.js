import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait)=> StyleSheet.create({
    container:{
        backgroundColor:color.lightGreen
    },
    categoryScroll :{
        // padding:10,
        // marginTop:10,
    },
    categoryName:{
        color:color.primaryGreen, 
        fontFamily:'Latto-Black', 
        fontWeight:'700', 
        fontSize:15,
        marginVertical:15,
        marginHorizontal:10
    }
})

export default style