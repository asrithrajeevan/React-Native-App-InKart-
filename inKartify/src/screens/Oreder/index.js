import React, { useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import CostomeSearch from "../../components/CostomeSearchBox";
import color from "../../components/common/colors";
import { useDimentionsContext } from "../../context";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";

const Orders = () => {
    //headerCommonLeft
    const dimensions = useDimentionsContext();
    const navigation=useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
            }
        )
        
    }, [])
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const order_items = [
        {
            id : '1',
            orderId : '#ASD423',
            orderDate : 'Orderd on:11/12/2023',
            address1 : '1800 Elis a, San Francisco, CA',
            address2 : '4423, USA',
            price : '879',
            quantity : '3'
        },
        {
            id : '2',
            orderId : '#AVD232',
            orderDate : 'Orderd on:11/12/2023',
            address1 : '1800 Elis St, asd Itally, CA',
            address2 : '4423, USA',
            price : '879',
            quantity : '3'
        },
        {
            id : '3',
            orderId : '#AWS423',
            orderDate : 'Orderd on:11/12/2023',
            address1 : '1800 Elis as, fgg Jurmany, CA',
            address2 : '4423, ero',
            price : '879',
            quantity : '3'
        },
        {
            id : '4',
            orderId : '#ASD423',
            orderDate : 'Orderd on:11/12/2023',
            address1 : '1800 ARUS St, San France, CA',
            address2 : '4423, Yen',
            price : '242',
            quantity : '2'
        },
        {
            id : '5',
            orderId : '#ASD423',
            orderDate : 'Orderd on:11/12/2023',
            address1 : '1800 Junction St, San America, CA',
            address2 : '4423, Doller',
            price : '344',
            quantity : '4'
        },
    ]
    return(
        <View style={responsiveStyle.container}>
            <CostomeSearch filter={true}/>
            <FlatList 
                data={order_items} 
                keyExtractor={(itemId, index)=>String(index)}
                showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={responsiveStyle.flatView}>
                            <View style={responsiveStyle.innerView}>
                                <View style={responsiveStyle.orderContainer}>
                                    <Text style={responsiveStyle.orderId}>{item.orderId}</Text>
                                    <Text style={responsiveStyle.orderDate}>{item.orderDate}</Text>
                                    <Text style={responsiveStyle.address1}>{item.address1}</Text>
                                    <Text style={responsiveStyle.address2}>{item.address2}</Text>
                                    <Text style={responsiveStyle.priceAndQuantity}>
                                        Paid:<Text style={responsiveStyle.price}> {item.price}.00</Text>, Items:<Text style={responsiveStyle.quantity}>{item.quantity}</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Image source={require('../../assets/images/map.png')} style={responsiveStyle.map}/>
                                </View>
                            </View>
                            <View style={responsiveStyle.BottomContainer}>
                                <Text style={responsiveStyle.orderShipped}>Order Shipped</Text>
                                <Text style={responsiveStyle.rateAndReview}>Rate & Review Products</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />


        </View>
    )
}

export default Orders