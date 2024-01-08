import color from "../common/colors";

const { StyleSheet } = require("react-native");

const style = (height, width) => StyleSheet.create({
    container:{
        marginVertical:20,
        borderRadius:15,
        backgroundColor:color.primaryGreen,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        margin:15
    },
    BottonTextStyle:{
        color:color.white,
        fontFamily:"Lato-Regular",
        fontWeight:'700',
        fontSize:18,
        padding:5
    }
})

export default style