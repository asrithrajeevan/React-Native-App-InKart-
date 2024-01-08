import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import color from "../../components/common/colors";
import Snackbar from "react-native-snackbar";
import validatePhoneNumber, { hasSpecialCharacter } from "./controller";
import { useDimentionsContext } from "../../context";

const LogInWithPhone = () => {
    const dimentions = useDimentionsContext();
    const responsiveStyle = styles(dimentions.windowHeight, dimentions.windowWidth, dimentions.portrait)

    const navigation = useNavigation()
    const [userPhone, handlePhone] = useState('')     // for storing mobilenumber.
    const [error, errorSet] = useState('')            // for setting error messages if the entered mobile number is not register.
    const [OtpField, setOtpField] = useState(false)   // for showing otp field after otp send successfully.
    const [OTP, setOTP] = useState('')                // for storing the user enterd otp.
    const [confirm, setConfirm] = useState(null);     // for storing the confirmation after the number confirmation.

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handlePhoneNum = async () => {
        try {
            errorSet(null)  // for removing the previous error displayed at the time of re-entering the mobilenumber.

            if(validatePhoneNumber(userPhone)){
                const confirmation = await auth().signInWithPhoneNumber(userPhone);
                console.warn(confirmation); // If we get the confirmation after provide the number to the firebase all are success.
                if(confirmation){
                    Snackbar.show({
                        text: 'OTP Sent Successfully',
                        backgroundColor : color.secondaryGreen,
                        duration: Snackbar.LENGTH_LONG,
                    });
                    setConfirm(confirmation)// for validating the entered otp is corect or not, we need the confirmation object.
                    setOtpField(true)       // If the success of confirmation the otp will be sent, at that time the OTP entering field should show.
                }
            }else{
                errorSet('Given Phone number is Incorrect...')
            }
        } catch (error) {
            console.warn(error);
            errorSet('Given Phone number is Incorrect...')
        }
    }
    // Conforming the user enterd code is correct or not
    const handleVerifyOtp = async () => {
        if(OTP.trim() !== '' && hasSpecialCharacter(OTP.trim())){
            try {
                const res =  await confirm.confirm(OTP.trim());
                console.warn('res-->',res);
                if(res){        // if the res have values or true the given otp is correct.
                    Snackbar.show({
                        text: 'Your phone number is verified, loging successfull',
                        backgroundColor : color.secondaryGreen,
                        duration: Snackbar.LENGTH_LONG,
                    });
                    navigation.navigate("Home") // navigating to the dashbord or home page after successfull registration
                }
            } catch (error) {
                console.warn('error--->',error)
                Snackbar.show({
                    text: 'OTP is incorrect plese try again',
                    backgroundColor : color.red,
                    duration: Snackbar.LENGTH_LONG,
                });
            }
        }else{
            Snackbar.show({
                text: 'OTP is incorrect plese try again',
                backgroundColor : color.red,
                duration: Snackbar.LENGTH_LONG,
            });
        }
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

                <Text style={responsiveStyle.loginText}>LogIn With Phone</Text>

                <CustomeTextInput
                    type = 'mobile'
                    placeholder = {'Phone Number'}
                    handleText={text =>{
                        errorSet(null)      // for removing the error when typing in the text input field
                        handlePhone(text)
                    }}
                />
                {/* if the given mobile numbe is not valid */}
                {error ? <View><Text style={{color:color.red}}>{error}</Text></View>:null}

                {OtpField ?
                    <CustomeTextInput
                    type = 'otp' 
                    placeholder = {'Enter the OTP'}
                    handleText={text => setOTP(text)}
                />
                : null}
                
                <CostomeBotton
                    type = 'primary'
                    handleButtonPress={OtpField? handleVerifyOtp: handlePhoneNum}
                    buttonText={OtpField? 'Verify OTP' : 'Sign Up'}
                />
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={responsiveStyle.GoToLogin}>Go To Login</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </View>
    )
}

export default LogInWithPhone