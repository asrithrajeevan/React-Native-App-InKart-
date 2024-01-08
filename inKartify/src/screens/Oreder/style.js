import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait)=> StyleSheet.create({
    container : {
        backgroundColor : color.white_level_3
    },
    flatView:{
        backgroundColor:color.lightGreen, 
        marginHorizontal:15,
        marginVertical:5, 
        borderRadius:15, 
        borderColor:color.EmeraldGreen,
        borderWidth:0.5,
        overflow:'hidden',
        padding:15
    },
    innerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1
    },
    orderContainer:{
        paddingBottom:10
    },
    orderId:{
        fontFamily:'Lato-Regilar', 
        fontSize:15, 
        fontWeight:'700'
    },
    orderDate:{
        fontFamily:'Lato-Regilar', 
        fontSize:14, 
        color:color.Green
    },
    orderedOn:{
        fontWeight:'700'
    },
    address1:{
        fontFamily:'Lato-Regilar', 
        fontSize:14, 
        color:color.grey
    },
    address2:{
        fontFamily:'Lato-Regilar', 
        fontSize:14, color:color.grey
    },
    priceAndQuantity:{
        fontFamily:'Lato-Regilar', 
        fontSize:14, 
        color:color.black
    },
    price:{
        fontFamily:'Lato-Regilar', 
        fontSize:14, 
        color:color.Green
    },
    quantity : {
        fontFamily:'Lato-Regilar', 
        fontSize:14, 
        color:color.Green
    },
    map:{
        width:85,
        height:85, 
        borderRadius:15, 
        overflow:'hidden',
        resizeMode:'cover',
        borderWidth:1,
        borderColor:color.white_level_3
    },
    BottomContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    orderShipped:{
        fontFamily:'Lato-Regilar', 
        fontSize:15, 
        color:color.black
    },
    rateAndReview:{
        fontFamily:'Lato-Regilar', 
        fontSize:15, 
        color:color.black
    }




})

export default style