import React from "react";
import { StyleSheet } from "react-native";
import color from "../../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    orderDetailsView:{
        margin:15,
        marginTop:30,
        marginBottom:15,
        borderBottomWidth:1
    },
    bagTotalTextView:{
        justifyContent:'space-between',
        alignContent:'center',
        flexDirection:'row',
        padding:5
    },
    discountAmt:{
        color:color.red,
        fontFamily:'Lato-Regular',
        fontSize:15,
    },
    savingAmount:{
        color:color.Green,
        fontFamily:'Lato-Regular',
        fontSize:15,
    },
    ordeDetailsTexts:{
        marginTop:5,
        fontFamily:'Lato-Regular',
        fontSize:15,
    },
    BagTotalAmt:{
        fontFamily:'Lato-Regular',
        fontSize:15,
    },
    ordeDetailsDeliveryTexts:{
        marginTop:5,
        fontFamily:'Lato-Regular',
        fontSize:15,   
        marginBottom:10 

    },
    ordeDetailsDeliveryAmount:{
        fontFamily:'Lato-Regular',
        fontSize:15,
        marginBottom:10 
    },
    bottomContainer:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        marginTop:10,
        marginHorizontal:20
    },
    totalText:{
        fontFamily:'Lato-Bold',
        fontSize:18
    },
    amtTotal:{
        fontFamily:'Lato-Bold',
        fontSize:18
    },
    orderDeatailsHead:{
        marginBottom:15,
        fontFamily:'Lato-Bold',
        fontSize:19,
        fontWeight:'800'
    },
})
export default style