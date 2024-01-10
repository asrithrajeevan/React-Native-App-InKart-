import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait) => StyleSheet.create({
    main : {
        flex:1,
    },
    container: {
        backgroundColor:color.white_level_3,

    },
    rightScrollView:{
        // backgroundColor:'red'
    },
    styleFlatList : {
        // marginLeft:15,
        backgroundColor:color.LightGreen,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        borderRadius:10,
    },
    catImage:{
        width: portrait? width*0.23 : width*0.2, 
        height:portrait? width*0.15 : width*0.15,
        resizeMode:'contain',
        marginVertical:10,
    },
    catImageTouch: {
        borderColor:color.LightGreen,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    containerRowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal: portrait ? width*0.025 : width*0.025
    },
    ImageBackground:{
        borderRadius:10,
        width: portrait? width*.69 : width*.72,
        height:width*.42,
        resizeMode:'contain',
        justifyContent:'center',
        alignSelf:'center',
        overflow:'hidden',
        marginBottom:5
    },
    bgImageTextView:{
        margin:10
    },
    productImage:{
        width:width*0.19,
        height:width*0.19,
        margin:5,
        resizeMode:'contain',
        // backgroundColor:color.EmeraldGreen
    },
    productImageContainer:{
        justifyContent:"center",
        alignItems:'center',
    },
    productFlatStyle:{
        justifyContent:'center',
        paddingTop:5,
    },
    ImageBg:{
        backgroundColor:color.category4,
        margin:3,
        justifyContent:'center',
        borderRadius:10,
        overflow:'hidden'
    },
    imageName:{
        fontFamily:'Lato-Bold',
        fontSize:16
    },
    imagePrice:{
        imagePrice :'Lato-Regular',
        fontSize:15
    }
})

export default style