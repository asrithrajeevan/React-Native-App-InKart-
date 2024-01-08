import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, Platform} from "react-native";
import styles from "./style";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";

const CustomeTextInput = props => {
    const {type, handleText, placeholder, value, check, multiline} = props;
    const [eyeIon, setEye] = useState(true)   // for implementing eye open and close
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)

    const keyboardType = 
        type === 'email'
        ? 'email-address'
        : type === 'password'
        ? 'default'
        : type === 'mobile'
        ? 'numeric' : 'default'
    
        const handleEye = () => {
            setEye(eyeIon ? false : true)
        }

        const secureTextEntry = type === 'password' ? (eyeIon ? true : false) : false;
        const icon = type === 'email' 
            ? require('../../assets/images/email.png') 
            : type ==='password' ?
                eyeIon ?  require('../../assets/images/eyeClose.png') : require('../../assets/images/eyeOpen.png')
            :type ==='mobile'? require('../../assets/images/smartphone.png') : false
    return (
        <View style={responsiveStyle.container}>
        <TextInput 
            onChangeText={handleText}           // passing the text value to login page through props.
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            style={[responsiveStyle.textInput,{height:Platform.OS=='ios'?multiline?dimensions.windowHeight*0.1 : null:null}]}
            selectionColor={color.primaryGreen}
            autoCapitalize={type==='email'? 'none':'characters'}
            value={value}
            placeholderTextColor={color.gray}
            multiline ={multiline? true:false}
        />            

        <TouchableOpacity>
            {check ? <Text style={responsiveStyle.checkText}>Check</Text> : null}
        </TouchableOpacity>

        <TouchableOpacity disabled={type==='password'? false : true} onPress={handleEye}>
            {!icon ? null : <Image style={responsiveStyle.emailIcon} source={icon} />}
        </TouchableOpacity>
        </View>
    )
}

export default CustomeTextInput