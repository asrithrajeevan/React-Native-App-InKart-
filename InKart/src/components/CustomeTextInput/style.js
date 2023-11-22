import { Dimensions, StyleSheet } from "react-native";
import color from "../common/colors";
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    textInput : {
        color : color.black_level_3,
        fontSize : 15,
        fontFamily : 'Lato-Regular',
        width : '90%',
    },
    container: {
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'space-between',
        backgroundColor : color.lightGreen,
        padding : width * 0.0441, //width * 0.01, 
        borderRadius : 10,
        marginVertical : 10,
        borderColor : 'grey',
        borderWidth : 1,
    },
    emailIcon : {
        width : 18,
        height : 18,
        marginRight : 10,
    }
})

export default styles