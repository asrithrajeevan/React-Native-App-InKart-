import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import { useDimentionsContext } from "../../context";

const LogInWithGoogle = () => {
    const dimentions = useDimentionsContext();
    const responsiveStyle = styles(dimentions.windowHeight, dimentions.windowWidth, dimentions.portrait)
    const [userEmail, handleEmail] = useState('')
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }


    return(
        <View style={responsiveStyle.container}>
            <Image
                source={require('../../assets/images/login_bg.webp')}
                style={responsiveStyle.logBg}
            />

            <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
                <Image
                    source={require('../../assets/images/InKart.png')}
                    style={responsiveStyle.inkart}
                />

                <Text style={responsiveStyle.loginText}>LogIn With Google</Text>

                <CustomeTextInput
                    type = 'email' 
                    placeholder = {'Email Address'}
                    handleText={text => handleEmail(text)}
                />
                <CostomeBotton
                    type = 'primary'
                    handleButtonPress={()=>null} 
                    buttonText={'Sign Up'}
                />
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={responsiveStyle.GoToLogin}>Go To Login</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </View>
    )
}

export default LogInWithGoogle