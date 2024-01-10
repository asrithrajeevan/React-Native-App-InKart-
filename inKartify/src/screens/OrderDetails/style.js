import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait) => StyleSheet.create({
    scrollView:{
        paddingBottom:100,
        padding:15
    },
    firstContainer:{
        alignItems:'center', 
        flexDirection:'row', 
        backgroundColor:color.primaryGreen, 
        borderRadius:15, 
        padding:15
    },
    marginLeft:{
        marginLeft:15
    },
    orderId:{
        fontFamily:'Lato-Regular',
        color:color.white,
        fontSize:15
    },
    orderStatus:{
        fontFamily:'Lato-Black',
        color:color.white,
        fontSize:20
    },
    itemsText : {
        fontFamily:'Lato-Black',
        paddingVertical:20, 
        fontSize:20, 
        color:color.primaryGreen
    },
    itemContainer:{
        flexDirection:'row',
        marginBottom:15,
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemDetails:{
        flexDirection:'row', 
        alignItems:'center'
    },
    quantityView:{
        backgroundColor:color.primaryGreen, 
        paddingVertical:15, 
        paddingHorizontal:20, 
        borderRadius:10
    },
    quantity:{
        color:color.white, 
        fontFamily:'Lato-Black'
    },
    nameDiscriptionView:{
        marginLeft:10
    },
    name:{
        fontFamily:'Lato-Black', 
        fontSize:17, 
        color:color.black
    },
    description:{
        fontFamily:'Lato-Regular'
    },
    price : {
        fontFamily:'Lato-Black'
    },
    paymentDetails: {
        fontFamily:'Lato-Black', 
        fontSize:20, 
        paddingVertical:15, 
        color:color.primaryGreen
    },
    paymentDetailsContainer:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between', 
        borderBottomWidth:1, 
        borderBottomColor:color.grey,
        paddingBottom:10
    },
    paymentDetailsText:{
        fontFamily:'Lato-Regular', 
        fontSize:15,
        lineHeight:25
    },
    paymentDetailsCouponText:{
        fontFamily:'Lato-Regular', 
        fontSize:15,
        lineHeight:25,
        color:color.red
    },
    totalView:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10
    },
    totalText:{
        fontFamily:'Lato-Black', 
        fontSize:16,
    },
    address:{
        fontFamily:'Lato-Black', 
        fontSize:20, 
        paddingTop:15, 
        color:color.primaryGreen
    },
    userName:{
        fontFamily:'Lato-Regular', 
        fontSize:15,
        lineHeight:20, 
        marginTop:5, 
        fontFamily:'Lato-Regular'
    },
    addressText:{
        fontFamily:'Lato-Regular', 
        fontSize:15,
        lineHeight:20, 
        fontFamily:'Lato-Regular'
    },
    paymentMethod : {
        fontFamily:'Lato-Black', 
        fontSize:20, 
        paddingTop:20, 
        color:color.primaryGreen
    },
    paymentMethodCotainer:{
        flexDirection:'row', 
        paddingTop:5, 
        alignItems:'center',
    },
    visaNumber:{
        fontFamily:'Lato-Regular', 
        fontSize:15,
        lineHeight:20, 
        marginTop:5, 
        fontFamily:'Lato-Regular'
    },
    paymentMethodText:{
        fontFamily:'Lato-Regular'
    },
    customButtonStyle:{
        position:'absolute', 
        bottom:0,
        width:'100%', 
        padding:15
    },
    flexEnd:{
        alignItems:'flex-end'
    }
})

export default style