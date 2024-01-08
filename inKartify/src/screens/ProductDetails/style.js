import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait)=> StyleSheet.create({
    container:{
        // marginBottom:1000,
    },
    hartView:{
        position:'absolute',
        right:0,
        padding:10
    },
    productImage:{
        width:width*0.7,
        height:width*0.7,
        resizeMode:'contain',
        // backgroundColor:color.EmeraldGreen,
        alignSelf:'center',
        margin:10
    },
    ProductDetailsContainer:{
        padding:10,
        paddingBottom:100,
        borderRadius:20,
        backgroundColor:color.white,
        elevation: 3, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: -3 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
    },
    productName:{
        fontFamily:'Lato-Bold',
        fontSize:25,
        fontWeight:'800',
        padding:10
    },
    productPrice:{
        fontFamily:'Lato-Bold',
        fontSize:15,
        fontWeight:'500',
    },
    productDetailsHead:{
        fontFamily:'Lato-Bold',
        fontSize:17,
        fontWeight:'800'
    },
    ratingView:{
        flexDirection:'row',
        alignItems:'center'
    },
    productDescription:{
        fontFamily:'Lato-Bold',
        fontSize:15,
        fontWeight:'500',
        color:color.grey
    },
    ratingTextColor:{
        color : color.grey
    },
    offTextStyle:{
        color:color.primaryGreen,
        fontFamily:'Lato-Bold',
        fontWeight:'700',
        marginLeft:10,
        fontSize:15
    },
    priceOffView:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:10,
    },
    innerProductDetails:{
        padding:10,
        marginBottom:10
    },
    addToCartSectionContainer:{
        backgroundColor:color.primaryGreen,
        position:"absolute",
        justifyContent:'space-between',
        alignSelf:'center',
        alignItems:'center',
        bottom:25,
        flexDirection:'row',
        padding:10,
        width:'90%',
        margin:10,
        borderRadius:10
    },
    qntContainer:{
        flexDirection:'row',
        backgroundColor:color.white,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        alignItems:'center'
    },
    qntText:{
        color:color.primaryGreen,
        fontSize:20,
        // fontFamily:'Lato-Bold',
        // fontWeight:'800'
    },
    qntNumText:{
        marginHorizontal:15,
        color:color.primaryGreen,
        fontFamily:'Lato-Bold',
        fontWeight:'800',
        fontSize:18
    },

    addToCartText:{
        color:color.white,
        fontFamily:'Lato-Bold',
        fontSize:15,
        fontWeight:'800',
        marginRight:5
    }
})

export default style