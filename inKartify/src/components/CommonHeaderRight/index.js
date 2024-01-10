import React from "react";
import { Image, TouchableOpacity, View, Text, Share } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import color from "../common/colors";
import { useSelector } from "react-redux";

const HeaderCommonRight = props => {
    const cartCount = useSelector(state => state.cartCount)
    const { plus, handlePressIcon} = props
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const handleNavigationCart = () => {
        navigation.navigate('Cart')

    }

    // React native share
    const handleNavigationShare = async () => {
        const result = await Share.share({
            message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    }

    return (
        <View style={responsiveStyle.rightIconsContainer}>
            {props.share ? <TouchableOpacity style={responsiveStyle.touchContainer} onPress={handleNavigationShare}>
            <AntDesign name="sharealt" size={30} color={color.black} />
            </TouchableOpacity> :""}
            {plus ? <TouchableOpacity style={responsiveStyle.touchContainer} onPress={handlePressIcon}>
            <AntDesign name="plussquareo" size={30} color={color.black} />
            </TouchableOpacity> :""}
            {props.cart ?<TouchableOpacity style={responsiveStyle.touchContainer} onPress={handleNavigationCart}>
                {cartCount < 1 ? null :<View style={responsiveStyle.cartCountView}><Text style={responsiveStyle.count}>{cartCount}</Text></View>}
                <Image source={require('../../assets/images/addToCart.png')} style={responsiveStyle.cartImage}/>
            </TouchableOpacity> :""}
        </View>
        
    )
}

export default HeaderCommonRight
