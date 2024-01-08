import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useDimentionsContext } from "../../context";


const CommonHeader = () => {
    const navigation = useNavigation()
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)

    const drawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }
    return(
        <View style={responsiveStyle.container}>
            <TouchableOpacity onPress={drawer}>
                <Image source={require('../../assets/images/drawer_icon.png')} style={responsiveStyle.drawer_icon}/>
            </TouchableOpacity>
            <Image source={require('../../assets/images/InKart.png')} style={responsiveStyle.HeaderLogo}/>
        </View>
    )
}

export default CommonHeader