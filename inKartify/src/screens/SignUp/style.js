import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
const {width, height} = Dimensions.get('screen')

const styles = (height,width,portrait) => StyleSheet.create({
    container:{
        height:'100%'
    },
    logBg : {
        width : width,
        height : width*0.3,
        resizeMode : 'cover', // for standing pictur fill and fit.
    },
    ScrollView : {
        flex:1,
        backgroundColor : colors.white,
        marginTop : portrait? -width*0.10 : -width*0.22,
        borderTopLeftRadius : width*0.051,
        borderTopRightRadius : width*0.051,
        overflow : 'hidden',
        padding :portrait? width*0.038 : width*0.038,
    },
    inkart : {
        width : portrait? width*0.41: width*0.35,
        marginLeft:-15,
        height :width*0.099,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    loginText : {
        fontFamily : 'Lato-Bold',
        fontSize : 20,
        paddingTop: height*0.024,
        color : colors.steel

    },
    GoToLogin : {
        fontFamily : 'Lato-regular',
        fontSize : 14,
        textAlign : 'center',
        marginVertical : width*0.05,
        marginBottom : width*0.09,
        color : colors.grey
    },
    OrSignUpWith : {
        fontFamily : 'Lato-regular',
        fontSize : 14,
        textAlign : 'center',
        marginVertical : width*0.05,
        color : colors.grey
    },
    validationContainer : {
        padding:5,
        marginTop:20
    },
    validationText : {
        color : colors.red
    }
})

export default styles