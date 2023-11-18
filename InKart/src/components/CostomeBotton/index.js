import React from "react";
import { Button, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import color from "../common/colors";

const CostomeBotton = props =>{
    const {type, icon, handleButtonPress, buttonText} = props

    return(
        <TouchableOpacity
            onPress={handleButtonPress} 
            style={[styles.Button,{backgroundColor : type === 'primary' ? color.secondaryGreen : color.lightGreen}]}
        >
        <Image style={styles.Logo} source={icon}/>
        <Text style={{
            color : type === 'primary' ? color.white : color.black_level_3, 
            fontSize : type === 'primary' ? 15 : 13,
            fontFamily : type == 'primary' ? 'Poppins-Bold' : 'Poppins-Regular',

        }}>{buttonText}</Text>

        </TouchableOpacity>
    )
}

export default CostomeBotton