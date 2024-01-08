import color from "../common/colors";

const { StyleSheet } = require("react-native");

const style = (height, width) => StyleSheet.create({
    container:{
        margin:25,
        borderRadius:15,
        backgroundColor:color.primaryGreen,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
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