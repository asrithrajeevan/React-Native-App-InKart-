import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    logBg : {
        width : width,
        height : height*0.14,
        resizeMode : 'cover', // for standing pictur fill and fit.
    },
    ScrollView : {
        flex:1,
        backgroundColor : colors.white,
        marginTop : -width*0.10,
        borderTopLeftRadius : width*0.051,
        borderTopRightRadius : width*0.051,
        overflow : 'hidden',
        padding : width*0.038,
    },
    inkart : {
        width : width*0.51,
        height : height*0.099,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    loginText : {
        fontFamily : 'Poppins-Bold',
        fontSize : 20,
        paddingTop: height*0.024,
        color : colors.steel

    }
})

export default styles