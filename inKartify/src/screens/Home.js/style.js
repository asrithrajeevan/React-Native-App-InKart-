import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = StyleSheet.create({
    main: {
        flex:1
    },
    container : {
        backgroundColor : color.white_level_3,
        // marginBottom:50
        height:'500%',
    },
    footerView : {
        margin:15,
    },
    footerText:{
        fontFamily:'Lato-Bold',
        fontSize:20
    },
    browsView:{
        marginTop:15,
        borderRadius:20,
        backgroundColor:color.EmeraldGreen,
        padding:5,
        width:140,
        justifyContent:'center',
        alignItems:'center'
    },
    browsText:{
        marginVertical:5,
        color:color.white
    }
})

export default style