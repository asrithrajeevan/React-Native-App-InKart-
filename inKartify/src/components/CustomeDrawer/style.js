import { StyleSheet } from "react-native";
import color from "../common/colors";

const style =(height, width)=> StyleSheet.create({
    mainContainer : {
        flex:1,
        marginVertical:10, 
        padding:15,
        marginTop:30
    },
    profileContainer : {
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
    },
    profilePicContainer:{
        width:80,
        height:80,
        borderRadius:80/2,
        backgroundColor : color.white_level_3,
        justifyContent : "center",
        alignItems :'center',
        borderWidth:0.5,
        borderColor:color.iron,
        overflow:'hidden',
    },
    profilePic :{
        fontSize:30,
        color:color.black_level_3, 
        fontWeight:'800'
    },
    userDetails : {
        paddingLeft:15,
        width:'65%',
    },
    userName: {
        marginVertical:2, 
        fontFamily:'Lato-Bold', 
        fontWeight:'800', 
        fontSize:20,
        color: color.black
    },
    userEmail : {
        marginVertical:2, 
        fontFamily:'Lato-Regular', 
        fontSize:15,
    },
    horizontalLine : {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical:10,
    },
    contentItemContainer : {
        marginTop:30
    },
    touchableContent : {
        flexDirection:'row', 
        justifyContent:'space-between',
    },
    itemView:{
        flexDirection:'row'
    },
    contentItemIcon : {
        width:28,
        height:28,
    },
    contentItemName: {
        paddingLeft: 15, 
        paddingBottom: 15, 
        fontFamily:'Lato-Bold', 
        fontSize : 20,
        color : color.black
    },
    contentArrowView : {
        paddingVertical:5
    },
    contentArrowImg : {
        width:20,
        height:20,
        backgroundColor:color.EmeraldGreen,
        borderRadius:15,
        overflow:'hidden'
    },
    logoutButton :{
        borderWidth:0.1, 
        width:'40%', 
        padding:10, 
        marginTop:30, 
        borderColor:color.black_level_3, 
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row', 
        borderRadius:20, 
        backgroundColor:color.lightGreen,
    },
    logoutButtonImg :{
        width:25, 
        height:25,
        backgroundColor: color.EmeraldGreen,
        overflow:'hidden',
        borderRadius:15
    },
    logoutButtonText:{
        fontFamily:'Lato-Bold',
        marginLeft:5,
        color : color.black

    },
    supportView: {
        borderRadius : 20,
        backgroundColor : color.lightGreen,
        padding:15,
        marginVertical:15
    },
    supportTouch:{
        width:'40%', 
        padding:10, 
        marginTop:10, 
        borderColor:color.black_level_3, 
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row', 
        borderRadius:20, 
        backgroundColor:color.EmeraldGreen
    },
    supportTextHead: {
        fontFamily: 'Lato-Black',
        fontSize : 15,
        color : color.black,
        marginVertical : 5
    },
    supportDescription : {
        fontFamily : 'Lato-Regular',
        lineHeight : 20,
        color : color.black
    },
    image: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: width * 0.2,
      },
})

export default style