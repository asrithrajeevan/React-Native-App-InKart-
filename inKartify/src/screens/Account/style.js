import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style =(width, height)=> StyleSheet.create({
    container : {
        backgroundColor : color.white_level_3,
        flex:1,
    },
    fullNameView:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        margin:15
    },
    fullNameText:{
        fontFamily:'Lato-Black',
        fontSize:20,
    },
    profileImageView:{
        backgroundColor:color.category1,
        borderRadius:110,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        overflow:'hidden',
        resizeMode:'cover'

    },
    profileImage:{
        width:150,
        height:150,
        alignSelf:'center',
    },
    bigProfile:{
        width:280,
        height:280,
        marginBottom:120,
        borderRadius:10
    },
    penImgView:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    penImg:{
        alignSelf:'center',
        width:40,
        height:40,
        position:'absolute',
        bottom:5,
        right:-80
    },
    detailsView:{
        margin:15,
        marginTop:50,
    },
    updateButtonView:{
        margin:15
    },
    bigProfileBg:{
        marginTop:-20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    closeBtn:{
        width:30,
        height:30
    },
    closeView:{
        position:'absolute',
        zIndex:9,
        right:width*0.032,
        top:width*0.242
    },
    imagePickerModelBg:{
        marginTop:-20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    imagePickerCloseView:{
        position:'absolute',
        zIndex:9,
        right:width*0.063,
        top:width*0.434
    },
    chooseContainer:{
        backgroundColor: 'rgba(42, 42, 42, 0.8)',
        paddingVertical:35,
        padding:20, 
        borderRadius:15,
        flexDirection:'row'
    },
    galleryTouch:{
        backgroundColor:color.EmeraldGreen,
        margin:10,
        padding:5,
        borderRadius:15,
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    },
    openCameraTouch:{
        backgroundColor:color.EmeraldGreen,
        margin:10,
        padding:5,
        borderRadius:15,
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    },
    galleryText:{
        padding:5,
        fontFamily:'Lato-Black',
        color:color.black
    },
    openCameraText:{
        padding:5,
        fontFamily:'Lato-Black',
        color:color.black    
    }



})

export default style

// import { StyleSheet } from "react-native";
// import colors from "../../components/common/colors";

// const style = (width, height) =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.white_2,
//       padding: 15,
//     },
//     header: {
//       fontFamily: "Lato-Black",
//       fontSize: 25,
//       color: colors.black,
//       alignSelf: "center",
//     },
//     bigImage: {
//       width: width * 0.8,
//       height: width * 0.8,
//     },
//     image: {
//       width: width * 0.3,
//       height: width * 0.3,
//       borderRadius: width * 0.2,
//     },
//     userImage: {
//       alignSelf: "center",
//       justifyContent: "center",
//       alignItems: "center",
//       marginVertical: 10,
//       backgroundColor: colors.secondaryGreen,
//       borderRadius: width * 0.2,
//     },
//     edit: {
//       width: 40,
//       height: 40,
//       resizeMode: "contain",
//     },
//     editTouch: {
//       position: "absolute",
//       right: 0,
//       bottom: 0,
//     },
//     modalBack: {
//       backgroundColor: "rgba(0,0,0,0.7)",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     edit: {
//       width: 40,
//       height: 40,
//       resizeMode: "contain",
//     },
//     close: {
//       backgroundColor: colors.white,
//       borderRadius: 25,
//       position: "absolute",
//       zIndex: 9,
//       right: 15,
//       top: height * 0.29,
//       // bottom: 10,
//       // left: 140
//     },
//     selectBox: {
//       backgroundColor: colors.white,
//       padding: 25,
//       borderRadius: 15,
//       justifyContent: "space-around",
//       alignItems: "center",
//       flexDirection: "row",
//     },
//     touch: {
//       padding: 15,
//       justifyContent: "center",
//       backgroundColor: colors.primaryGreen,
//       borderRadius: 15,
//       marginHorizontal: 10,
//     },
//     pickText: {
//       fontFamily: "Lato-Regular",
//       fontSize: 18,
//       color: colors.white,
//     },
//     editChoose: {
//       width: 40,
//       height: 40,
//       resizeMode: "contain",
//     },
//     closechoose: {
//       backgroundColor: colors.white,
//       borderRadius: 25,
//       position: "absolute",
//       zIndex: 9,
//       right: -10,
//       top: -10,
//     },
//   });

// export default style;