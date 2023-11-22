import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [userName, handleText] = useState('')
    const [password, handlePassword] = useState('')
    const navigation = useNavigation()

    const handleGotoSignUp = () => {
        navigation.navigate('SignUp')
    }

    const handleButtonPress = () => {
        console.warn('Sign in button clicked');
    }

    const LogInWithPhone = () => {
        navigation.navigate('LogInWithPhone')
    }

    const LogInWithGoogle = () => {
        navigation.navigate('LogInWithGoogle')
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
                
                <TouchableOpacity onPress={handleGotoSignUp}>
                <Text style={styles.CreateNew}>If you are new, create Now</Text>
                </TouchableOpacity>

                <View style={styles.dottedLineContainer}>
                    <View style = {styles.dottedLine}/>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Text style={styles.dashedText}>Or Login With</Text>
                        </View>
                    <View style = {styles.dottedLine}/>
                </View>

                <CostomeBotton
                    type = 'secondary'
                    handleButtonPress={LogInWithPhone}
                    buttonText={'Log In With Phone'}
                    icon = {require('../../assets/images/smartphone.png')}
                />

                <CostomeBotton
                    type = 'third'
                    handleButtonPress={LogInWithGoogle}
                    buttonText={'Login With Google'}
                    icon = {require('../../assets/images/google.png')}
                />
                
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Login as a gust
                </Text>
            </View>

        </View>
    )
}

export default Login