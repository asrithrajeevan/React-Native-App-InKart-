import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity, ScrollView } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import HeaderCommonRight from "../../components/CommonHeaderRight";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import color from "../../components/common/colors";
import StarRating from 'react-native-star-rating-widget';
import MoreInfo from "./Components/MoreInfo";
import ExtraDetails from "./Components/ExtraDetails";
import ProductReview from "./Components/ProductReview";
import DeliveryInfo from "./Components/DeliveryInfo";
import ProductScroll from "../../components/ProductScroll";
import { useDispatch, useSelector } from "react-redux";
import firestore  from "@react-native-firebase/firestore";
import Snackbar from "react-native-snackbar";
import { updateCartCount } from "../../storage/action";

const ProductDetails = props =>{
    const dimensions = useDimentionsContext();
    const navigation = useNavigation()
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const route = useRoute()
    const {product} = route.params
    const [hart, setHartTrue] = useState(false)
    const [rating, setRating] = useState(0);
    const [productDetails, setProductDetails] = useState({})
    const scrollRef = useRef()
    const [quantity, updateQuantity] = useState(1)
    const {userId, cartCount} = useSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 18, fontFamily:'Lato-Bold',fontWeight:'700', color: 'black' }}>Products Details</Text>
                </View>
            ),
            headerLeft:()=> <HeaderCommonLeft type={'back'} />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20},
            headerRight:()=> <HeaderCommonRight cart={true} share={true} />,
            },
        )
    }, []) // for changing the head
    const handleHart = () => {
        setHartTrue(!hart)
        // if(hart):

    }
    
    useEffect(() => {
        setProductDetails(product)
    }, [product])
    
    const NavigationNeeded = (value, item) =>{
        scrollRef.current.scrollTo({x:0,y:0,animated:true})
        setProductDetails(item)
    }

    const handleQuantity = val =>{
        if(val==='plus'){
            updateQuantity(quantity+1)
        }else{
            if(quantity===1){
                return quantity
            }else{
                updateQuantity(quantity-1)
            }
        }
    }

    const handleAddToCart = async () => {
        console.warn('productDetails==>',productDetails);
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',productDetails.productId).get().then(snapshot => {
            if(snapshot.empty){
                    firestore().collection('Cart').add({
                        created: Date.now(),
                        description:productDetails.description,
                        name : productDetails.name,
                        price : productDetails.price,
                        quantity : quantity,
                        userId: userId,
                        productId: productDetails.productId,
                        image: productDetails.image,
                })
                dispatch(updateCartCount(cartCount+1))
                Snackbar.show({
                    text: 'Item added to cart',
                    backgroundColor : color.primaryGreen,
                    duration: Snackbar.LENGTH_SHORT,
                });
            }else{
                // item already existing
                firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity)+quantity,
                    })
                    Snackbar.show({
                        text: 'Item added to cart',
                        backgroundColor : color.primaryGreen,
                        duration: Snackbar.LENGTH_SHORT,
                    });
            }
        })    
    }

    return(
        <View>
            <ScrollView ref={scrollRef} style={responsiveStyle.container} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={responsiveStyle.hartView} onPress={handleHart}>
                    {hart? <AntDesign name="hearto" size={30} color={color.red} /> : <AntDesign name="heart" size={30} color={color.red} />}
                </TouchableOpacity>
                <Image source={{uri:productDetails.image}} style={responsiveStyle.productImage}/>
                <View style={responsiveStyle.ProductDetailsContainer}>
                    <Text style={responsiveStyle.productName}>{productDetails.name}</Text>
                    <View style={responsiveStyle.ratingView}>
                        <StarRating rating={rating} onChange={setRating} />
                        <Text style={responsiveStyle.ratingTextColor}>( {rating} rating )</Text>
                    </View>
                    <View style={responsiveStyle.innerProductDetails}>
                        <View style={responsiveStyle.priceOffView}>
                            <Text style={responsiveStyle.productPrice}>₹ {productDetails.price}</Text>
                            <Text style={responsiveStyle.offTextStyle}>50% off</Text>
                        </View>
                        <MoreInfo />
                        <View >
                            <Text style={responsiveStyle.productDetailsHead}>Product Details</Text>
                            <Text style={responsiveStyle.productDescription}>{product.description}</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: color.grey,
                                borderBottomWidth: 1,
                                marginTop:10
                            }}
                            />
                        <ExtraDetails />
                        <ProductReview product={product}/>
                        <DeliveryInfo />
                    </View>
                    <ProductScroll isNavigationNeeded={NavigationNeeded} />
                </View> 
            </ScrollView>

            <View style={responsiveStyle.addToCartSectionContainer}>
                <View style={responsiveStyle.qntContainer}>
                    <TouchableOpacity onPress={()=>handleQuantity('minus')}><Entypo name="minus" size={20} color={color.primaryGreen} /></TouchableOpacity>
                    <Text style={responsiveStyle.qntNumText}>{quantity}</Text>
                    <TouchableOpacity onPress={()=>handleQuantity('plus')}><Entypo name="plus" size={20} color={color.primaryGreen} /></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleAddToCart}><Text style={responsiveStyle.addToCartText}>Add To Cart</Text></TouchableOpacity>
            </View>  
        </View>
        
    )
}

export default ProductDetails