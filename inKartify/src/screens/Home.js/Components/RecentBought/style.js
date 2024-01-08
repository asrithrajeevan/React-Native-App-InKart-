import React from "react";
import { StyleSheet } from "react-native";
import color from "../../../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        padding:5,
        backgroundColor:color.lightGreen,
        borderRadius:10,
        margin:10
    },
    head:{
        fontFamily:'Lato-Black',
        padding:5,
        color:color.black,
        fontSize : 15,
    },
    contentView:{
        backgroundColor:color.white,
        borderRadius:10,
        margin:5,
    },
    image:{
        width : 90,
        height :70,
        resizeMode:'contain',
        borderRadius:10,
    }
})

export default style