import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import color from "../../components/common/colors";

const Home = () => {

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/login_bg.webp')}
                style={styles.logBg}
            />
            <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                <Text style={{color: color.black, fontSize:50, fontWeight:'800', textAlign:'center',justifyContent:'center'}}>Home Page</Text>
            </ScrollView>
        </View>
    )
}

export default Home