import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import color from "../common/colors";

const CustomeTextInput = props => {
    const {type, handleText, placeholder} = props;

    const [eyeIon, setEye] = useState(true)   // for implementing eye open and close
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

        const secureTextEntry = type === 'password' ? (eyeIon ? true : false) : false ;
        const icon = type === 'email' 
            ? require('../../assets/images/email.png') 
            : type ==='password' ?
                eyeIon ?  require('../../assets/images/eyeClose.png') : require('../../assets/images/eyeOpen.png')
            :false
    return (
        <View style={styles.container}>
        <TextInput 
            onChangeText={handleText}           // passing the text value to login page through props.
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            style={styles.textInput}
            selectionColor={color.primaryGreen}
            autoCapitalize={type==='email'? 'none':'characters'}
        />
        
        <TouchableOpacity disabled={type==='password'? false : true} onPress={handleEye}>
            {!icon ? null : <Image style={styles.emailIcon} source={icon} />}
        </TouchableOpacity>
        </View>
    )
}

export default CustomeTextInput