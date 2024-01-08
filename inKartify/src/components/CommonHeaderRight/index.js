import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
const HeaderCommonRight = props => {
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);

    const handleNavigation = () => {
        navigation.navigate('Cart')
    }

    return (
        <View>
            {props.cart ?<TouchableOpacity style={responsiveStyle.touchContainer} onPress={handleNavigation}>
                <View style={responsiveStyle.cartCountView}><Text style={responsiveStyle.count}>2</Text></View>
                <Image source={require('../../assets/images/addToCart.png')} style={responsiveStyle.cartImage}/>
            </TouchableOpacity> :""}
        </View>
        
    )
}

export default HeaderCommonRight
