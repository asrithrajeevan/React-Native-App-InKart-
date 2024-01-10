import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Modal, ScrollView, Text, View } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import Feather from 'react-native-vector-icons/dist/Feather';
import color from "../../components/common/colors";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import CostomeBotton from "../../components/CostomeBotton";
import firestore  from "@react-native-firebase/firestore";
import Snackbar from "react-native-snackbar";


const OrderDetails= () =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const navigation = useNavigation()
    const route = useRoute()
    const {item} = route.params
    const [loading, setLoading] = useState(false)
    // console.warn(item);
    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft type='back' action = {()=>navigation.navigate('Orders')}/>,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20},
            headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 18, fontFamily:'Lato-Bold',fontWeight:'700', color: 'black' }}>Order Details</Text>
                </View>
            ),
            }
        )
        
    }, [])

    const reOrder = async () => {
        try {
            setLoading(true)
            const orderId = Math.random()// making the payment id more brief for orderid
            // console.wsarn('orderId---->',orderId);
            await firestore().collection('Orders').add({
                orderId : String(orderId).slice(4, 12).toUpperCase(),
                created : Date.now(),
                updated : Date.now(),
                orderStatus : 'Ordered',
                totalAmount : item.totalAmount,
                address : item.address,
                userId : item.userId,
                paymentMethod : 'Online',
                cartItem : item.cartItem,
                userName : item.userName,
                userEmail : item.userEmail,
                userPhone : item.userPhone,
                expectedDeliveryDate : ' ' // this field is for administration department.
            }).then(resp => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
                Snackbar.show({
                    text: 'Your Order Is Successfully Placed',
                    backgroundColor : color.primaryGreen,
                    duration: Snackbar.LENGTH_LONG,
                });
            })
            } catch (error) {
                console.log('error--->',error);
            }
        
    }
    return(
        <View style={{flex:1}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={loading}
                >
                <View style={{height:'100%', width:'100%', backgroundColor:'rgba(52, 52, 52, 0.8)', justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator  size={'large'} color={color.EmeraldGreen}/>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={responsiveStyle.scrollView}>
                <View style={responsiveStyle.firstContainer}>
                    <Feather name="box" size={50} color={color.white} />
                    <View style={responsiveStyle.marginLeft}>
                        <Text style={responsiveStyle.orderId}>OrderId : {item?.orderId?? 'DFFJFGJA3'}</Text>
                        <Text style={responsiveStyle.orderStatus}>{item?.orderStatus?? ''}</Text>
                    </View>
                </View>
                <Text style={responsiveStyle.itemsText}>Items : </Text>
                {item?.cartItem &&
                    item.cartItem.map((element,index) => {
                        return(
                            <View key={index} style={responsiveStyle.itemContainer}>
                                <View style={responsiveStyle.itemDetails}>
                                    <View style={responsiveStyle.quantityView}>
                                        <Text style={responsiveStyle.quantity}>{element.quantity}</Text>
                                    </View>
                                    <View style={responsiveStyle.nameDiscriptionView}>
                                        <Text style={responsiveStyle.name}>{element.name}</Text>
                                        <Text style={responsiveStyle.description}>{element.description}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={responsiveStyle.price}>₹ {element.price}.00</Text>
                                </View>
                            </View>
                        )
                    })
                }
                <Text style={responsiveStyle.paymentDetails}>Payment Details</Text>
                <View style={responsiveStyle.paymentDetailsContainer}>
                    <View>
                        <Text style={responsiveStyle.paymentDetailsText}>Bag Total</Text>
                        <Text style={responsiveStyle.paymentDetailsText}>Coupon Discount</Text>
                        <Text style={responsiveStyle.paymentDetailsText}>Delivery</Text>
                    </View>
                    <View style={responsiveStyle.flexEnd}>
                        <Text style={responsiveStyle.paymentDetailsText}>₹ {item.totalAmount - 50}.00</Text>
                        <Text style={responsiveStyle.paymentDetailsCouponText}>Applay Coupon</Text>
                        <Text style={responsiveStyle.paymentDetailsText}>₹ 50.00</Text>
                    </View>
                </View>

                <View style={responsiveStyle.totalView}>
                    <Text style={responsiveStyle.totalText}>Total Amount</Text>
                    <Text style={responsiveStyle.totalText}>₹ {item.totalAmount}.00</Text>
                </View>

                <Text style={responsiveStyle.address}>Address</Text>
                <View>
                    <Text style={responsiveStyle.userName}>{item?.userName?? ''}</Text>
                    <Text style={responsiveStyle.addressText}>{item.address}</Text>
                </View>

                <Text style={responsiveStyle.paymentMethod}>Payment Method</Text>
                <View style={responsiveStyle.paymentMethodCotainer}>
                    <FontAwesome name="cc-visa" size={40} color={color.black} />
                    <View style={responsiveStyle.marginLeft}>
                        <Text style={responsiveStyle.visaNumber}>**** **** **** 3448</Text>
                        <Text style={responsiveStyle.paymentMethodText}>{item?.paymentMethod ?? ''}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={responsiveStyle.customButtonStyle}>
            <CostomeBotton
                type = 'primary'
                handleButtonPress={reOrder} 
                buttonText={'Reorder'}
            />        
            </View>
        </View>
        
    )
}

export default OrderDetails