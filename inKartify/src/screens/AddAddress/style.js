import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    container:{
        flex:1,
    },
    textInput : {
        fontFamily:'Lato-Regular',
        borderRadius:10,
        borderWidth:1,
        borderColor:color.EmeraldGreen,
        backgroundColor:color.lightGreen,
        margin:15
    },
    mapViewContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    mapView:{
        height: width*0.699, 
        width: width, 
    },
    textView:{
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        paddingTop:30
    },
    locationIconView:{
        backgroundColor:color.primaryGreen,
        padding:2,
        borderRadius:5
    },
    currentLocationText:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'600',
        fontFamily:'Lato-Bold'
    }

})

export default style