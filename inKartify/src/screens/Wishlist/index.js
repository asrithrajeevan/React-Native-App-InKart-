import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import style from "./style";
import { useDimentionsContext } from "../../context";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";

const Wishlist = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    // header left
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight:() => {
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                        <View style={responsiveStyle.cartCountView}><Text style={responsiveStyle.count}>2</Text></View>
                        <Image source={require('../../assets/images/addToCart.png')} style={{width:30, height:30, marginRight:15, resizeMode:'contain'}} />
                    </TouchableOpacity>
                )
            },
            headerLeft:()=> <HeaderCommonLeft name={"Wishlist"}/>,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
            }
        )
        
    }, [])
    
        const wishlistProducts = [
        {
            id : 0,
            name : 'Shoes',
            content : 'High quality shoes',
            price : 1500,
            image : require('../../assets/images/shoes.png'),
            off : '50%',
        },    
        {
            id : 1,
            name : 'Rubix Cube',
            content : 'Good quality Cube',
            price : 1499,
            image : require('../../assets/images/newCube.png'),
            off : '50%'
        },    
        {
            id : 2,
            name : 'Laptop',
            content : 'High performance laptops',
            price : 45000,
            image : require('../../assets/images/newLaptop.png'),
            off : '50%'
        },    
        {
            id : 3,
            name : 'Chair',
            content : 'Good quality chair',
            price : 1300,
            image : require('../../assets/images/newChire.png'),
            off : '50%'
        },    
        {
            id : 4,
            name : 'Sofa',
            content : 'Whater proof sofasets',
            price : 20500,
            image : require('../../assets/images/newSofa.png'),
            off : '50%'
        }
    ]

    return(
        <View style={responsiveStyle.container}>
            <FlatList 
                data={wishlistProducts} 
                keyExtractor={(itemId, index)=>String(index)}
                contentContainerStyle={responsiveStyle.flatView}
                renderItem={({item, index})=>{
                    return(
                        <View style={responsiveStyle.productView}>
                            <Image source={item.image} style={responsiveStyle.imageStyle}/>
                            <View style={responsiveStyle.productSeconView}>
                                <Text style={responsiveStyle.title} numberOfLines={2}>{item.name}</Text>
                                <Text style={responsiveStyle.desc} numberOfLines={2}>{item.content}</Text>
                                <View style={responsiveStyle.bottomView}>
                                    <Text style={responsiveStyle.price}>{item.price}.00</Text>
                                    <View style={responsiveStyle.offView}>
                                        <Text style={responsiveStyle.off}>{item.off} Off</Text>
                                    </View>
                                    <TouchableOpacity style={responsiveStyle.cartView}>
                                        <Text style={responsiveStyle.addtoCart}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={responsiveStyle.removeView}><Image source={require('../../assets/images/close.png')} style={responsiveStyle.removeImage}/></TouchableOpacity>                         
                        </View>
                    )
                }}
                />

        </View>
    )
}

export default Wishlist