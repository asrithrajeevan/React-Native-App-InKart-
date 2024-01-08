import React from "react";
import { Button, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";

const CostomeBotton = props => {
    const {type, icon, handleButtonPress, buttonText} = props
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)

    return(
        <TouchableOpacity
            onPress={handleButtonPress}
            style={[responsiveStyle.Button,{backgroundColor : type === 'primary' ? color.secondaryGreen : color.lightGreen}]}
            >

        <Image style={responsiveStyle.Logo} source={icon}/>

        <Text style={{
            color : type === 'primary' ? color.white : color.black_level_3,
            fontSize : type === 'primary' ? dimensions.portrait? 15: 20:15,
            fontFamily : type == 'primary' ? 'Lato-Bold' : 'Lato-Regular',
        }}>{buttonText}</Text>

        </TouchableOpacity>
    )
}

export default CostomeBotton