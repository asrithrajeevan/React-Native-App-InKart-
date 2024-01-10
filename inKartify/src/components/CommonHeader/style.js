import React from "react";
import { StyleSheet,Platform } from "react-native";
import color from "../common/colors";

const styles = (height, width, portrait) => StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: portrait?  Platform.OS == 'ios'? width*0.13:width*0.00 : Platform.OS == 'ios'? width*0.02 : width*0.0,
        height : portrait? width*0.12 : width*0.07,
        backgroundColor : color.white,
        paddingHorizontal:15
    },
    HeaderLogo : {
        resizeMode :'contain',
        height : portrait? width*0.3 : width*0.06,
        width : portrait? width*0.3 : width*0.25

    },
    drawer_icon : {
        resizeMode :'contain',
        width : portrait? width*0.08 : width*0.05, 
        height : portrait? width*0.08 : width*0.05,
        marginLeft:5
    }
})

export default styles