import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import style from "./style";
import { useDimentionsContext } from "../../context";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import firestore  from "@react-native-firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import CommonEmpty from "../../components/CommonEmpty";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
import { updateCartCount, updateWishlist } from "../../storage/action";
import HeaderCommonRight from "../../components/CommonHeaderRight";

const Wishlist = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const userId = useSelector(state => state.userId); // user id is important to store in cart.

    const navigation = useNavigation()
    const [getWishlist, setWishlistItem] = useState()
    const dispatch = useDispatch()
    // header left
    useEffect(() => {
        navigation.setOptions({
            headerRight:() => <HeaderCommonRight cart={true}/>
            // {
            //     return(
            //         <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
            //             <View style={responsiveStyle.cartCountView}><Text style={responsiveStyle.count}>{cartCount}</Text></View>
            //             <Image source={require('../../assets/images/addToCart.png')} style={{width:30, height:30, marginRight:15, resizeMode:'contain'}} />
            //         </TouchableOpacity>
            //     )
            // }
            ,
            headerLeft:()=> <HeaderCommonLeft name={"Wishlist"}/>,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
            }
        )
        
    }, [])

    const isFocused = useIsFocused()
    useEffect(()=>{
        if(isFocused){
            getWishlistItem()
        }
    },[isFocused])
    
    // const wishlistProducts = [
    //     {
    //         id : 0,
    //         name : 'Shoes',
    //         content : 'High quality shoes',
    //         price : 1500,
    //         image : require('../../assets/images/shoes.png'),
    //         off : '50%',
    //     },    
    //     {
    //         id : 1,
    //         name : 'Rubix Cube',
    //         content : 'Good quality Cube',
    //         price : 1499,
    //         image : require('../../assets/images/newCube.png'),
    //         off : '50%'
    //     },    
    //     {
    //         id : 2,
    //         name : 'Laptop',
    //         content : 'High performance laptops',
    //         price : 45000,
    //         image : require('../../assets/images/newLaptop.png'),
    //         off : '50%'
    //     },    
    //     {
    //         id : 3,
    //         name : 'Chair',
    //         content : 'Good quality chair',
    //         price : 1300,
    //         image : require('../../assets/images/newChire.png'),
    //         off : '50%'
    //     },    
    //     {
    //         id : 4,
    //         name : 'Sofa',
    //         content : 'Whater proof sofasets',
    //         price : 20500,
    //         image : require('../../assets/images/newSofa.png'),
    //         off : '50%'
    //     }
    // ]


    const getWishlistItem = async () => {
        await firestore().collection('Wishlist').where('userId','==',userId).get().then(snapshot => {
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setWishlistItem(result)
            }else{
                setWishlistItem([])
            }
    })}

    const removeFromWishlist = async item => {
        // dispatch(updateWishlist)
        await firestore().collection('Wishlist').doc(item.id).delete().then(()=>{
            // getWishlistItem() // we can recall cart API after delete the data but it is more time taking purposes, so the below is more efficient
            // filtering the array item in the whishlist after delete element
            const filterdWishlist = getWishlist.filter(element => element.id !== item.id,)
            setWishlistItem(filterdWishlist)
        })
    }

    const handleAddToCart = async productDetails =>{
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',productDetails.productId).get().then(snapshot => {
            if(snapshot.empty){
                    firestore().collection('Cart').add({
                        created: Date.now(),
                        description:productDetails.description,
                        name : productDetails.name,
                        price : productDetails.price,
                        quantity : 1,
                        userId: userId,
                        productId: productDetails.productId,
                        image: productDetails.image,
                })
                dispatch(updateCartCount(1))
                Snackbar.show({
                    text: 'Item added to cart',
                    backgroundColor : color.primaryGreen,
                    duration: Snackbar.LENGTH_SHORT,
                });
            }else{
                // item already existing
                firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity)+1,
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
        <View style={responsiveStyle.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={getWishlist} 
                keyExtractor={(itemId, index)=>String(index)}
                contentContainerStyle={responsiveStyle.flatView}
                ListEmptyComponent={()=>{
                    return(
                        <View style={{alignItems:'center',marginTop:10}}>
                            <CommonEmpty title={'Your Wishlist is Empty'} />
                            <TouchableOpacity style={{padding:10}} onPress={()=>navigation.navigate('Shop',{type:'Shop'})}><Text>Go to Shop</Text></TouchableOpacity>
                        </View>
                    )
                }}
                renderItem={({item, index})=>{
                    return(
                        <View style={responsiveStyle.shadowEffect}>
                            <View style={responsiveStyle.productView}>
                                <Image source={{uri:item.image}} style={responsiveStyle.imageStyle}/>
                                <View style={responsiveStyle.productSeconView}>
                                    <Text style={responsiveStyle.title} numberOfLines={2}>{item.name}</Text>
                                    <Text style={responsiveStyle.desc} numberOfLines={2}>{item.description}</Text>
                                    <View style={responsiveStyle.bottomView}>
                                        <Text style={responsiveStyle.price}>₹ {item.price}.00</Text>
                                        <TouchableOpacity onPress={()=>handleAddToCart(item)} style={responsiveStyle.cartView}>
                                            <Text style={responsiveStyle.addtoCart}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={()=>removeFromWishlist(item)} style={responsiveStyle.removeView}><Image source={require('../../assets/images/close.png')} style={responsiveStyle.removeImage}/></TouchableOpacity>                         
                            </View>
                        </View>
                    )
                }}
                />

        </View>
    )
}

export default Wishlist