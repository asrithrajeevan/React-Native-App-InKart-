import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait)=> StyleSheet.create({
    container:{
        backgroundColor:color.lightGreen
    },
    categoryScroll :{
        // margin:15
        // marginTop:10,
    },
    categoryName:{
        color:color.primaryGreen, 
        fontFamily:'Lato-Black', 
        fontWeight:'700', 
        fontSize:15,
        paddingVertical:20,
        marginHorizontal:10
    },
    flatListContainer:{
        marginHorizontal:10,
        marginVertical:5,
        backgroundColor:color.white,
        // borderRadius:20,
        // borderColor:color.EmeraldGreen, 
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 1, // Border width
        borderColor: '#ddd', // Border color
        borderRadius: 20, // Border radius (optional)
        overflow:'hidden'
    },
    shadowEffect:{
        elevation: 3, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 1, height: 1 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
    },
    itemImages :{
        margin:10,
        width:85,
        height:85,
        alignSelf:'center',
        marginVertical:10,
        resizeMode:'contain'
    },
    itemContentView :{
        borderLeftWidth:1,
        borderColor:color.black, 
        marginLeft:10, 
        paddingHorizontal:20, 
        padding:5
    },
    itemName:{
        fontFamily:'Lato-Black', 
        fontSize:18, 
        color:color.black_level_3
    },
    itemContent : {
        fontFamily:'Lato-Regular', 
        fontSize:15, 
        color:color.black_level_3,
        marginTop:5
    },
    priceOffQntyView:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    priceOffView:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    itemPrice : {
        fontFamily:'Lato-Bold', 
        fontSize:15, 
        color:color.black_level_3,
        marginTop:10
    },
    offView:{
        backgroundColor:color.FernGreen,
        borderRadius:15,
        padding:5,
        marginTop:10,
        marginHorizontal:10,
    },
    itemOff : {
        alignSelf:'flex-end',
        fontFamily:'Lato-Regular', 
        fontSize:15, 
        color:color.white,
        marginHorizontal:5
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    price :{
        color:color.black_level_3, 
        fontFamily:'Lato-Bold',
        fontSize:15
    },
    plusTouch:{
        padding:5,
        backgroundColor:color.EmeraldGreen,
        borderRadius:5
    },
    plus:{
        fontSize:20,
        color:color.white
    },
    qntView :{
        marginHorizontal:5,
        overflow:'hidden',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:color.FernGreen,
        padding:3,
        borderRadius:15,
    },
    QntyText1:{
        color:color.black,
        fontFamily:'Lato-Bold',
        fontSize:15,

    },
    QntyText2:{
        color:color.FernGreen,
        fontFamily:'Lato-Bold',
        marginHorizontal:10,
        fontSize:15, 

    },
})

export default style