import React from "react";
import { StyleSheet } from "react-native";
import color from "../../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        borderRadius:10,
        margin:10
    },
    head:{
        fontFamily:'Lato-Black',
        marginBottom:5,
        color:color.black,
        fontSize : 17,
    },
    contentView:{
        backgroundColor:color.white,
        borderRadius:10,
        margin:5,
        overflow:'hidden'
    },
    image:{
        width : 90,
        height :70,
        resizeMode:'contain',
        borderRadius:10,
    }
})

export default style