import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";

const Login = () => {
    const [userName, handleText] = useState('')
    const [password, handlePassword] = useState('')

    const handleButtonPress = () => {
        console.warn('Sign in');
    }

    return(
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/login_bg.jpg')} 
                style={styles.logBg}
            />

            <ScrollView style={styles.ScrollView}>
                <Image 
                    source={require('../../assets/images/InKart.png')} 
                    style={styles.inkart}
                />

                <Text style={styles.loginText}>Login Account</Text>

                <CustomeTextInput 
                    type = 'email' 
                    placeholder = {'Email Address'} 
                    handleText={text => handleText(text)}
                />

                <CustomeTextInput 
                    type = 'password'
                    placeholder = {'Password'} 
                    handleText={text => handlePassword(text)}
                />

                <CostomeBotton 
                    type = 'primary'
                    handleButtonPress={handleButtonPress} 
                    buttonText={'Sign In'}
                />
                
                <Text style={styles.CreateNew}>If you are new, create Now</Text>

                <CostomeBotton
                    type = 'secondary'
                    handleButtonPress={handleButtonPress} 
                    buttonText={'Log in with phone'}
                    icon = {require('../../assets/images/smartphone.png')}
                />

                <CostomeBotton
                    type = 'third'
                    handleButtonPress={handleButtonPress}
                    buttonText={'Login as a gust'}
                    icon = {require('../../assets/images/google.png')}
                />
            </ScrollView>
        </View>
    )
}

export default Login