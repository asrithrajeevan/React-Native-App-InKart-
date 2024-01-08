import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useDimentionsContext } from "../../../context";
import style from "./style";
import CustomeTextInput from "../../../components/CustomeTextInput";

const DeliveryInfo = () =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);

    return(
        <View style={responsiveStyle.CheckDeliveryContainer}>
            <Text style={responsiveStyle.CheckDeliveryText}>Check Delivery</Text>
            <Text style={responsiveStyle.commonText}>Enter pincode to check delivery date/pickup option.</Text>
            <CustomeTextInput handleText={(text)=>console.warn(text)} check={true} placeholder={'Enter Pincode'} />
            <Text style={responsiveStyle.commonText}>Free delivery on orders above ₹500.00</Text>
            <Text style={responsiveStyle.commonText}>Cash on delivery available.</Text>
            <Text style={responsiveStyle.commonText}>Easy 21 days return and exchange.</Text>
        </View>
    )
}

export default DeliveryInfo