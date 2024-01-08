import React from "react";
import { StyleSheet } from "react-native";
import color from "../../components/common/colors";

const style = (height, width, portrait)=> StyleSheet.create({
    container:{
        paddingTop:15,
        backgroundColor:color.white_level_3
    },
    reviewInnerContainer:{
        margin:15,
        backgroundColor:color.white,
        marginTop:3,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        elevation: 3, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
    },
    reviewerProfileContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    profileImage:{
        height:25,
        width:25
    },
    profileView:{
        borderRadius:25/2,
        backgroundColor:color.lightGreen,
        overflow:'hidden',
        padding:1
    },
    profileNameView:{
        marginLeft:5
    },
    profileNameText:{
        fontFamily:'Lato-Regular',
        fontWeight:'700',
        fontSize:15
    },
    reviewText:{
        marginTop:10
    },

})

export default style