import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import  firestore from "@react-native-firebase/firestore";
import { EmailValidation, validatePhoneNumber } from "../../components/common/validations";

const SignUp = () => {
    const [getUsername, setUsername] = useState('')
    const [getEmail, setEmail] = useState('')
    const [getMobile, setMobile] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getCpassword, setCpassword] = useState('')
    const navigation = useNavigation()

    const [validation, setValidationErr] = useState(null)

    const handleGoBack = () => {
        navigation.goBack()
    }
    
    const handleSignup = () => {
        navigation.navigate('LogInWithGoogle')
    }

    const handleData = async () => {

        // Shoule check the form validation before saving it to file store.
        if( getUsername.trim() !== ''
            && getEmail.trim() !== ''
            && getMobile.trim() !== ''
            && getPassword.trim() !== ''
            && getCpassword.trim() !== '' ){
                if(getPassword.trim() === getCpassword.trim()){
                    //checking if any other account is existing or not using username and email
                    await firestore().collection('Users')
                    .where('username','==',getUsername.trim())  // we checking if the user entered username and filestore user name is existing using '==' operator. 
                    .where('email', '==', getEmail.trim()).get().then(async snapshot => {
                        if(snapshot.empty){
                            // if the account is empty 'if(true)' there is no other account exist.
                            if(EmailValidation(getEmail)){
                                if(validatePhoneNumber(getMobile)){
                                    const userData = {
                                        username : getUsername,
                                        email : getEmail,
                                        mobilenumber : getMobile,
                                        password : getPassword,
                                        cpassword : getCpassword,
                                        created : String(new Date()),
                                        updated : String(new Date()),
                                    }
                                    await firestore().collection('Users').add(userData).then( resp =>{  // Users is a collection name of our table, we created on firestore. And we give our response on then function. 
                                        console.warn(resp)
                                    }).catch(err => {                                           // We give the error in the catch function.
                                        console.warn(err);
                                    })
                                    console.warn('Successfully Added to Firestore.....');
                                }else{
                                    setValidationErr('Given mobile number is not a valid...')
                                }
                            }else{
                                setValidationErr('Given email is not a valid email...')
                            }
                        }else{
                            // usage of snap bar packages. 
                        }
                    })
                }else{
                    setValidationErr('Given passwords are not matching...')
                }
        }else{
            setValidationErr('Fill up all the fields to continue...')
        }          
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

                <Text style={styles.loginText}>Sign Up Account</Text>

                { validation ? 
                    <View style={styles.validationContainer}>
                        <Text style={styles.validationText}>{validation}</Text>
                    </View>
                    
                 : null }

                <CustomeTextInput
                    placeholder = {'username'}
                    handleText={text => setUsername(text)}
                />

                <CustomeTextInput
                    type = 'email' 
                    placeholder = {'Email Address'} 
                    handleText={text => setEmail(text)}
                />


                <CustomeTextInput
                    type = 'mobile'
                    placeholder = {'Mobile Number'} 
                    handleText={text => setMobile(text)}
                />

                <CustomeTextInput
                    type = 'password'
                    placeholder = {'Password'} 
                    handleText={text => setPassword(text)}
                />

                <CustomeTextInput
                    type = 'password'
                    placeholder = {'Confirm Password'} 
                    handleText={text => setCpassword(text)}
                />  

                <CostomeBotton
                    type = 'primary'
                    handleButtonPress={handleData} 
                    buttonText={'Sign Up'}
                />
                    
                <Text style={styles.OrSignUpWith}>Or Signup With</Text>

                <CostomeBotton
                    type = 'third'
                    handleButtonPress={handleSignup}
                    buttonText={'Sign Up With Google'}
                    icon = {require('../../assets/images/google.png')}
                />

                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={styles.GoToLogin}>Go To Login</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </View>
    )
}

export default SignUp