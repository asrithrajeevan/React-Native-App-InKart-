import React from "react";
import { Text, Vibration, View } from "react-native";
import { useDimentionsContext } from "../../context";
import color from "../common/colors";

const CommonEmpty = props =>{
    const{title} = props
    const dimensions = useDimentionsContext();
    // const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)
    return(
        <View>
            <Text style={{color:color.primaryGreen,fontSize:20, fontWeight:'700', fontFamily:'Lato-Bold'}}>{title}</Text>
        </View>
    )
}

export default CommonEmpty