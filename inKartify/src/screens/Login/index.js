import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
import firestore  from "@react-native-firebase/firestore"; // make it sure importing firestore gitven like this.
import auth from '@react-native-firebase/auth';
import { isValidEmail } from "./controller";
import { useDimentionsContext } from "../../context";
import { useDispatch } from "react-redux";
import { login } from "../../storage/action";

const Login = () => {
    const dimensions = useDimentionsContext()
    // console.log('login ==>> height :',dimensions.getHeight, 'width : ',dimensions.getWidth);
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page

    const [userEmail, handleEmail] = useState('')
    const [password, handlePassword] = useState('')
    const navigation = useNavigation()
    const dispatch = useDispatch()  // for redux activity.

    // The below code looks, does the user register previously..?
    function onAuthStateChanged(user) {
        // console.warn(user);
    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // onAuthStateChanged looks, If the user already registered or not using the devices.
        return subscriber;
    })

    const handleGotoSignUp = () => {
        navigation.navigate('SignUp')
    }

    const handleButtonLogin = async () => {
        if(userEmail.trim() == '' || password.trim()==''){
            Snackbar.show({
                text: 'Fillup all the fields to continue',
                backgroundColor : color.red,
                duration: Snackbar.LENGTH_LONG,
            });
        }else{
            if(isValidEmail(userEmail.trim())){
                // we should check if the user is registerd in our firestore DB
                await firestore().collection('Users')
                .where('email','==',userEmail.trim())  // we checking if the user entered username and filestore user name is existing using '==' operator. 
                .where('password', '==', password.trim()).get().then(async snapshot => { // We using the await into this snapshot so we should use the async.
                    if(snapshot.empty){ // We can check if there is any value is existing or not using 'empty'.
                        // if the account is empty 'if(true)' there is no other account exist.
                        Snackbar.show({
                            text: 'This user is not registered with us, try creating a new account',
                            backgroundColor : color.red,
                            duration: Snackbar.LENGTH_LONG,
                        });
                    }else{
                        // Acessing datas from firestore
                        snapshot.forEach(documentSnapshot => {
                            const resData = documentSnapshot.data()
                            console.warn('documentSnapshot',documentSnapshot.id);
                            // console.warn(resData);
                            if(password.trim() === resData.password && userEmail.trim() === resData.email){
                                Snackbar.show({
                                    text: 'Loging successfull',
                                    backgroundColor : color.primaryGreen,
                                    duration: Snackbar.LENGTH_LONG,
                                });
                                dispatch(
                                    login({
                                        userId : documentSnapshot.id, // for getting the id of user collection in firstor
                                        firstName:resData.firstName, 
                                        lastName:resData.lastName, 
                                        mobilenumber:resData.mobilenumber, 
                                        email:resData.email, 
                                        profileImage:resData.profileImage
                                    }))
                                navigation.navigate('AppDrawer')
                            }else{
                                Snackbar.show({
                                    text: 'Incorrect email or password plese try again',
                                    backgroundColor : color.red,
                                    duration: Snackbar.LENGTH_LONG,
                                });
                            }
                        })
                    }
                }).catch(err=>console.warn(err))

            }else{
                Snackbar.show({
                    text: 'Enter a valid email',
                    backgroundColor : color.red,
                    duration: Snackbar.LENGTH_LONG,
                });
            }
        }
    }

    const LogInWithPhone = () => {
        navigation.navigate('LogInWithPhone')
    }

    const LogInWithGoogle = () => {
        navigation.navigate('LogInWithGoogle')
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

                <Text style={responsiveStyle.loginText}>Login Account</Text>

                <CustomeTextInput
                    type = 'email' 
                    placeholder = {'Email Address'} 
                    handleText={text => handleEmail(text)}
                />

                <CustomeTextInput
                    type = 'password'
                    placeholder = {'Password'} 
                    handleText={text => handlePassword(text)}
                />

                <CostomeBotton
                    type = 'primary'
                    handleButtonPress={handleButtonLogin} 
                    buttonText={'Sign In'}
                />
                
                <TouchableOpacity onPress={handleGotoSignUp}>
                <Text style={responsiveStyle.CreateNew}>If you are new, create Now</Text>
                </TouchableOpacity>

                <View style={responsiveStyle.dottedLineContainer}>
                    <View style = {responsiveStyle.dottedLine}/>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Text style={responsiveStyle.dashedText}>Or Login With</Text>
                        </View>
                    <View style = {responsiveStyle.dottedLine}/>
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

            <View style={responsiveStyle.footer}>
                <Text style={responsiveStyle.footerText}>
                    Login as a gust
                </Text>
            </View>
        </View>
    )
}

export default Login