import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import color from "../common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../storage/action";

const CustomeDrawer = () =>{
    const navigation = useNavigation();
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.firstName); // we can aceess the global state like this
    const lastName = useSelector(state => state.lastName); // we can aceess the global state like this
    const email = useSelector(state => state.email); // we can aceess the global state like this
    const profileImage = useSelector(state => state.profileImage); // we can aceess the global state like this

    // console.log('profileImage--->',profileImage);

    const drawerContent = [
        {
            itemId : 0,
            itemName : 'Home',
            navigatTo : 'Home',
            icon : require('../../assets/images/drawer_home.png'),
        },
        {
            itemId : 1,
            itemName : 'Shop by category',
            navigatTo : 'Category',
            icon : require('../../assets/images/drawer_category.png'),
        },
        {
            itemId : 2,
            itemName : 'Orders',
            navigatTo : 'Orders',
            icon : require('../../assets/images/drawer_orders.png'),
        },
        {
            itemId : 3,
            itemName : 'Your wishlist',
            navigatTo : 'Wishlist',
            icon : require('../../assets/images/drawer_wishlist.png'),
        },
        {
            itemId : 4, 
            itemName : 'Account',
            navigatTo : 'Account',
            icon : require('../../assets/images/drawer_account.png'),
        },

    ]

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return(
        <View style={responsiveStyle.mainContainer}>
            {/* overflow hidden is an important one for text fulfiling*/}
            <TouchableOpacity style={responsiveStyle.profileContainer} onPress={()=>navigation.navigate('Account')}>
                {/* profile */}
                <View style={responsiveStyle.profilePicContainer}>
                    <Image source={
                            profileImage === ""
                                ? require("../../assets/images/profilePic.png")
                                : { uri: profileImage }

                            }         
                        style={responsiveStyle.image}
                    />
                </View>
                {/* width is nessasary for text fullfilling, if a bigger name comes it will align down */}
                <View style={responsiveStyle.userDetails}>
                    <Text style={responsiveStyle.userName}>{firstName}</Text>
                    <Text style={responsiveStyle.userEmail}>{email}</Text>
                </View>
            </TouchableOpacity>

            <View style={responsiveStyle.horizontalLine} />

            {drawerContent.map((item, index)=>{
                return(
                    <View key={item.itemId} style={responsiveStyle.contentItemContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate(item.navigatTo)} style={responsiveStyle.touchableContent}>
                            <View style={responsiveStyle.itemView}>
                                <Image source={item.icon} style={responsiveStyle.contentItemIcon} />
                                <Text style={responsiveStyle.contentItemName}>{item.itemName}</Text>
                            </View >
                            <View style={responsiveStyle.contentArrowView}>
                                <Image source={require('../../assets/images/drawer_arrow.png')} style={responsiveStyle.contentArrowImg} />
                            </View>
                        </TouchableOpacity>
                    </View>
               )
            })}

            {/* logout */}
            <TouchableOpacity onPress={handleSignOut} style={responsiveStyle.logoutButton}>
                <Image source={require('../../assets/images/drawer_arrow.png')} style={responsiveStyle.logoutButtonImg} />
                <Text style={responsiveStyle.logoutButtonText}>Sign Out</Text>
            </TouchableOpacity>

            {/* contact support */}
            <View style={responsiveStyle.supportView}>
                <Text style={responsiveStyle.supportTextHead}>Contact support</Text>
                <Text style={responsiveStyle.supportDescription}>If you  have any problem with the app, feel free to contact our 24 hours contact system</Text>
                <TouchableOpacity style={responsiveStyle.supportTouch}>
                    <Text style={responsiveStyle.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CustomeDrawer