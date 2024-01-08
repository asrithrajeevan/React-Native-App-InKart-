import React from "react";
import { View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import color from "../../../components/common/colors";
import style from "./style";
import { useDimentionsContext } from "../../../context";

const MoreInfo = () =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    return(
        <View style={responsiveStyle.moreInfoContainer}>
            <View style={responsiveStyle.moreInfoDropDownButton}>
                <Text style={responsiveStyle.buttonText}>500kg / ₹250.00</Text>
                <AntDesign name="down" size={20} color={color.black} />
            </View>
            <View style={responsiveStyle.moreInfoDropDownButton}>
                <Text style={responsiveStyle.buttonText}>Delivery Time</Text>
                <AntDesign name="down" size={20} color={color.black} />
            </View>
        </View>
    )
}
export default MoreInfo