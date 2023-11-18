import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import color from "../common/colors";

const CustomeTextInput = props => {
    const {type, handleText} = props;

    const [eyeIon, setEye] = useState(true)   // for implementing eye open and close
    const keyboardType = 
        type === 'email'
        ? 'email-address'
        : type === 'password'
        ? 'default' : 'default';

        const handleEye = () => {
            setEye(eyeIon ? false : true)
        }

        const secureTextEntry = type ==='password' ? (eyeIon ? true : false) : false ;
        const icon = type === 'email' ? require('../../assets/images/email.png') : eyeIon ?  require('../../assets/images/eyeClose.png') : require('../../assets/images/eyeOpen.png') ;
    return (
        <View style={styles.container}>
        <TextInput 
        onChangeText={handleText}           // passing the text value to login page through props.
        placeholder="Text here  " 
        keyboardType={keyboardType} 
        secureTextEntry={secureTextEntry} 
        style={styles.textInput}
        selectionColor={color.primaryGreen}/>
        <TouchableOpacity disabled={type==='password'? false : true} onPress={handleEye}>
        {!icon ? null : <Image style={styles.emailIcon} source={icon} />}
        </TouchableOpacity>
        </View>
    )
}

export default CustomeTextInput