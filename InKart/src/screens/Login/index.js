import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";

const Login = () => {
    const [userName, handleText] = useState('')
    const [password, handlePassword] = useState('')
    console.warn('userName --> ',userName);
    console.warn('password --> ',password);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/login_bg.jpg')} style={styles.logBg}/>
            <ScrollView style={styles.ScrollView}>
                <Image source={require('../../assets/images/InKart.png')} style={styles.inkart}/>
                <Text style={styles.loginText}>Login Account</Text>
                <CustomeTextInput type = 'email' handleText={text => handleText(text)}/>         
                <CustomeTextInput type = 'password' handleText={text => handlePassword(text)}/>
                <CostomeBotton/>
            </ScrollView>
        </View>
    )
}

export default Login