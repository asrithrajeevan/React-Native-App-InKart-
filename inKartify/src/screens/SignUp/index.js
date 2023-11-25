import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import  firestore from "@react-native-firebase/firestore";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import validatePhoneNumber, { hasSpecialCharacter } from "./controller";


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
    
    const handleSignup = async () => {
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true}); // we want to ckeck if the PlayServices is existing
    }

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId:'903118379962-dia4e1hqpphhjlve3dpkd7bvgvqedg81.apps.googleusercontent.com',
        });
    },[])

    const handleData = async () => {

        // Shoule check the form validation before saving it to file store.
        if( getUsername.trim() !== ''
            && getEmail.trim() !== ''
            && getMobile.trim() !== ''
            && getPassword.trim() !== ''
            && getCpassword.trim() !== '' ){
                if(hasSpecialCharacter(getEmail)){
                    if(validatePhoneNumber(getMobile)){
                        if(getPassword.trim() === getCpassword.trim()){
                            //checking if any other account is existing or not using username and email
                            await firestore().collection('Users')
                            .where('username','==',getUsername.trim())  // we checking if the user entered username and filestore user name is existing using '==' operator. 
                            .where('email', '==', getEmail.trim()).get().then(async snapshot => { // We using the await into this snapshot so we should use the async.
                                if(snapshot.empty){ // We can check if there is any value is existing or not using 'empty'.
                                    // if the account is empty 'if(true)' there is no other account exist.
                                    const userData = {
                                        username : getUsername,
                                        email : getEmail,
                                        mobilenumber : getMobile,
                                        password : getPassword,
                                        cpassword : getCpassword,
                                        created : String(new Date()),
                                        updated : String(new Date()),
                                    }
                                    // Saving data to firestore
                                    await firestore().collection('Users').add(userData).then(resp => {  // Users is a collection name of our table, we created on firestore. And we give our response on then function. 
                                        // console.warn(resp)                                      // an object will get after saving the data
                                        Snackbar.show({
                                            text: 'Successfully Registered',
                                            backgroundColor : color.secondaryGreen,
                                            duration: Snackbar.LENGTH_LONG,
                                        });
                                        navigation.navigate('Home') // it will navigate the file after successfully registration.

                                    }).catch(err => {                                           // We give the error in the catch function.
                                        console.warn(err);
                                    })

                                }else{
                                    // usage of snap bar packages. 
                                    Snackbar.show({
                                        text: 'This email is already existing our system try another email.',
                                        backgroundColor : color.red,
                                        duration: Snackbar.LENGTH_LONG,
                                    });
                                }
                            })
                        }else{
                            setValidationErr('Given passwords do not matching...')
                        }                                    
                    }else{
                        setValidationErr('Given mobile number is not a valid...')
                    }
                }else{
                    setValidationErr('Given email is not a valid email...')
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