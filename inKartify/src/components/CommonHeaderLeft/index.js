import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
const HeaderCommonLeft = props => {
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);

    const handleNavigation = () => {
        if(props.type=='back'){
            if(props.action){
                props.action()
            }else{
                navigation.goBack()
            }
        }else{
            navigation.toggleDrawer()
        }
    }
    return (
        <TouchableOpacity style={responsiveStyle.touchContainer} onPress={handleNavigation}>
            <Image source={props.type == 'back'? require('../../assets/images/leftArrow.png') : require('../../assets/images/drawer_icon.png')} style={responsiveStyle.arrowImage}/>
        </TouchableOpacity>
    )
}

export default HeaderCommonLeft
