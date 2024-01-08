import React from "react";
import { Image, View } from "react-native";
import color from "../../components/common/colors";

const SplashScreen = () => {
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:color.EmeraldGreen}}>
            <View style={{marginTop:250}}>
                <Image source={require('../../assets/images/splashInkartLogo.png')} style={{width:200, height:50}}/>
            </View>
        </View>
    )
}

export default SplashScreen