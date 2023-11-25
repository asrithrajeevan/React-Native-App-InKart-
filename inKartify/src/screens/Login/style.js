import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
// const {width, height} = Dimensions.get('screen')
// console.log('style ==>> height :',height, 'width : ',width);
const styles = (height, width) => StyleSheet.create({
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
        height : width*0.099,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    loginText : {
        fontFamily : 'Lato-Bold',
        fontSize : 20,
        paddingTop: height*0.024,
        color : colors.steel

    },
    CreateNew : {
        fontFamily : 'Lato-regular',
        fontSize : 14,
        textAlign : 'center',
        color : colors.steel,
        marginVertical : width*0.05
    },
    footer : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : 15,
        backgroundColor : colors.lightGreen,
        borderTopWidth:5,
        borderColor:colors.white
    },
    footerText : {
        color : colors.black_level_3,
        fontFamily : 'Lato-regular'
    },
    dottedLineContainer : {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    dottedLine : {
        flex:1,
        borderStyle:'dashed',
        borderWidth:1,
        color: colors.grey,
    },
    dashedText:{
        backgroundColor:'white',
        fontFamily:'Lato-Regular',
        fontSize:15,
        padding:5
    }
})

export default styles