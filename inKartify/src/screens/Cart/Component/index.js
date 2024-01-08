import React, { useEffect } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { useDimentionsContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import HeaderCommonLeft from "../../../components/CommonHeaderLeft";

const OrderDetails = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({headerLeft:()=><HeaderCommonLeft />,
        headerTitleAlign:'left',
        headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
    })
    })
    return(
        <View>
            {/* Order Details */}
            <View style={responsiveStyle.orderDetailsView}>
                <Text style={responsiveStyle.orderDeatailsHead}>Orde Details</Text>
                <View style={responsiveStyle.bagTotalTextView}>
                    <Text style={responsiveStyle.ordeDetailsTexts}>Bag Total</Text>
                    <Text style={responsiveStyle.BagTotalAmt}>50</Text>

                </View>
                <View style={responsiveStyle.bagTotalTextView}>
                    <Text style={responsiveStyle.ordeDetailsTexts}>Bag Savings</Text>
                    <Text style={responsiveStyle.savingAmount}>₹ 0.0</Text>
                </View>
                <View style={responsiveStyle.bagTotalTextView}>
                    <Text style={responsiveStyle.ordeDetailsTexts}>Coupon Discount</Text>
                    <Text style={responsiveStyle.discountAmt}>Apply Coupon</Text>
                </View>
                <View style={responsiveStyle.bagTotalTextView}>
                    <Text style={responsiveStyle.ordeDetailsDeliveryTexts}>Delivery</Text>
                    <Text style={responsiveStyle.ordeDetailsDeliveryAmount}>₹ 50</Text>
                </View>
            </View>

            <View style={responsiveStyle.bottomContainer}>
                <Text style={responsiveStyle.totalText}>Total</Text>
                <Text style={responsiveStyle.amtTotal}>₹ 100.00</Text>
            </View>
        </View>
    )
}

export default OrderDetails