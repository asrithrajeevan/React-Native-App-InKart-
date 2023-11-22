import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";

const LogInWithGoogle = () => {
    const [userEmail, handleEmail] = useState('')
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }


    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/login_bg.webp')}
                style={styles.logBg}
            />

            <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                <Image
                    source={require('../../assets/images/InKart.png')}
                    style={styles.inkart}
                />

                <Text style={styles.loginText}>LogIn With Google</Text>

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
                    <Text style={styles.GoToLogin}>Go To Login</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </View>
    )
}

export default LogInWithGoogle