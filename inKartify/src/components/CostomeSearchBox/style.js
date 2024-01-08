import { StyleSheet } from "react-native";
import color from "../common/colors";

const style = (height, width) => StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems : 'center',
        paddingVertical:12,
    },
    newcontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems : 'center',
        paddingVertical:12,
    },
    search : {
        borderWidth:1,
        backgroundColor : color.lightGreen,
        borderColor:color.EmeraldGreen,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        padding:5,
        width : width*0.95,
        height : 50,
        overflow:'hidden'

    },
    newSearch:{
        borderWidth:1,
        backgroundColor : color.lightGreen,
        borderColor:color.EmeraldGreen,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        padding:5,
        width : width*0.85,
        height : 50,
        overflow:'hidden'
    },
    searchIcon :{ 
        marginLeft:5,
        width : 25,
        height : 25,
    },
    micIcon :{ 
        marginRight:5,
        width : 25,
        height : 25
    },
    textInput : {
        marginLeft:10,
        fontFamily:'Lato-Regular',
        fontSize: 18,
        height : 80,
        color:color.primaryGreen
    },
    innerSearch: {
        flexDirection:'row',
        alignItems:'center',
    },
    filterText:{
        fontWeight:'700',
        color:color.primaryGreen
    }

})

export default style