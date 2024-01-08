import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        backgroundColor:color.white_level_3,
        flex:1,
    },
    flatListContainer:{
        margin:15,
        marginVertical:5,
        backgroundColor:color.white,
        // borderRadius:20,
        // borderColor:color.EmeraldGreen, 
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 1, // Border width
        borderColor: '#ddd', // Border color
        borderRadius: 20, // Border radius (optional)
        elevation: 3, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
        overflow:'hidden'
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
    offerTicketContainerView:{
        marginTop:15,
    },
    offersTicketView:{
        flexDirection:'row'
    },
    ticketRoundLeftView:{
        marginRight:-10,
        zIndex:99
    },
    ticketRoundStyles:{
        width:25,
        height:25,
        borderRadius:25/2, 
        backgroundColor:color.white_level_3
    },
    ticketContainer:{
        width:'60%', 
        height:100, 
        backgroundColor:color.lightGreen
    },
    ticketContentView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:25
    },
    ticketOfferText:{
        fontSize:40,
        fontWeight:'900',
        fontFamily:'Lato-Bold',
        color:color.EmeraldGreen
    },
    percentage:{
        fontFamily:'Lato-Bold',
        color:color.EmeraldGreen
    },
    offText:{
        fontFamily:'Lato-Bold',
        color:color.EmeraldGreen,
        fontSize:10
    },
    headText:{
        fontFamily:'Lato-Bold',
        fontSize:14
    },
    contentText:{
        fontSize:10
    },
    ticketMiddleRoundView:{
        height:100, 
        backgroundColor:color.lightGreen
    },
    ticketMiddleUpperRound:{
        width:25, 
        height:25, 
        borderRadius:25/2, 
        backgroundColor:color.white_level_3,
        marginTop:-10
    },
    ticketMiddleBottomRound:{
        width:25, 
        height:25, 
        borderRadius:25/2, 
        backgroundColor:color.white_level_3,
        marginTop:70
    },
    ticketRightContainer:{
        width:'28%',
        flexDirection:'column',
        backgroundColor:color.lightGreen,
        justifyContent:'space-between'
    },
    ticketRightContent:{
        alignItems:'center',
        justifyContent:'center', 
        marginVertical:20, 
        marginLeft:-20
    },
    useCodeText:{
        fontFamily:'Lato-Regular',
        padding:5,
        fontSize:12, 
        fontWeight:'900'
    },
    codeView:{
        backgroundColor:color.Green,
        padding:5,
        borderRadius:15
    },
    itemCode:{
        color:color.white, 
        fontFamily:'Lato-Bold', 
        fontWeight:'500'
    },
    responsiveStyle:{
        marginLeft:-15
    },
    })

export default style