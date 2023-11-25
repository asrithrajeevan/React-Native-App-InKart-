import { Dimensions, StyleSheet } from "react-native";
import color from "../common/colors";
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    Button : { 
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'center',
        padding : width * 0.0441,
        borderRadius : 8,
        marginVertical : 10,
    },
    Logo : {
        width : width*0.07,
        height : width*0.07,
        marginRight : width*0.01,
    }
})

export default styles