import React, { useEffect, useState } from 'react';
import {FlatList, Image, Text, TouchableOpacity, View, } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../context';
import CommonSectionHeader from '../CommoenSectionHeader';
import firestore  from "@react-native-firebase/firestore";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from "react-native-snackbar";
import color from '../common/colors';
import { updateCartCount } from '../../storage/action';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const ProductScroll = props => {
    const {isNavigationNeeded} = props
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [newProducts, setRecentItem] = useState([])
    const navigation = useNavigation()
    const route = useRoute()
    const {userId, cartCount} = useSelector(state => state); // user id is important to store in cart.
    const dispatch = useDispatch()
    const [hart, setHartTrue] = useState(!false)
    const handleHart = item => {
        setHartTrue(!hart)
        // if(hart):
        console.warn(item);
    }
    useEffect(() => {
        getItems();
    }, [])
    
    const getItems = async () => {
        await firestore().collection('Product').get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setRecentItem(result)
            }
        }).catch(err=>console.log('err--->',err))
    }

    // const newProducts = [
    //     {
    //         id : 0,
    //         name : 'Shoes',
    //         content : 'High quality shoes',
    //         price : 1500,
    //         image : require('../../assets/images/shoes.png')
    //     },    
    //     {
    //         id : 1,
    //         name : 'Rubix Cube',
    //         content : 'Good quality Cube',
    //         price : 1500,
    //         image : require('../../assets/images/newCube.png')
    //     },    
    //     {
    //         id : 2,
    //         name : 'Laptop',
    //         content : 'High performance laptops',
    //         price : 1500,
    //         image : require('../../assets/images/newLaptop.png')
    //     },    
    //     {
    //         id : 3,
    //         name : 'Chair',
    //         content : 'Good quality chair',
    //         price : 1500,
    //         image : require('../../assets/images/newChire.png')
    //     },    
    //     {
    //         id : 4,
    //         name : 'Sofa',
    //         content : 'Whater proof sofasets',
    //         price : 1500,
    //         image : require('../../assets/images/newSofa.png')
    //     }
    // ]

    const handleNavigate = item =>{
        if(route.name ==='ProductDetails'){
            isNavigationNeeded(true, item)
        }else{
            // console.warn(route.name);
            navigation.navigate('ProductDetails',{product:item})
        }
    }

    const handleAddToCart = async item => {
        // console.warn(item);
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',item.id).get().then(snapshot => {
            if(snapshot.empty){
                firestore().collection('Cart').add({
                    created: Date.now(),
                    description:item.description,
                    name : item.name,
                    price : item.price,
                    quantity : 1,
                    userId: userId,
                    productId: item.id,
                    image: item.image
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

    const handleAddToWishlist = async productDetails => {
        // await firestore().collection('Cart').where('userId','==',userId).where('productId','==',productDetails.id).get().then(snapshot => {
            // if(snapshot.empty){
                firestore().collection('Wishlist').add({
                    created: Date.now(),
                    updated: Date.now(),
                    description:productDetails.description,
                    name : productDetails.name,
                    price : productDetails.price,
                    userId: userId,
                    productId: productDetails.id,
                    image: productDetails.image,
                    categoryId : productDetails.categoryId
                }).then(()=>{
                    Snackbar.show({
                        text: 'Item added to Wishlist',
                        backgroundColor : color.primaryGreen,
                        duration: Snackbar.LENGTH_SHORT,
                    });
                })
            }

        // })
    // }
    return(
        <View style={responsiveStyle.container}>
            {/* <View style={responsiveStyle.headView}>
                <View>
                    <Text style={responsiveStyle.headText}>Newly added</Text>
                    <Text style={responsiveStyle.contentText}>Pay less, Get More.</Text>
                </View>
                <Text style={responsiveStyle.seeAll}>See All</Text>
            </View> */}

            {/* we create the a header componet separatly because the header is common */}

            <View style={responsiveStyle.scrollView}>
            <CommonSectionHeader head={'Newly added'} content={'Pay less, Get More.'}/>

                <FlatList 
                    data={newProducts} 
                    horizontal 
                    keyExtractor={(itemId, index)=>String(index)}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item, index})=>{
                    return(

                        <TouchableOpacity style={responsiveStyle.flatListContainer} onPress={()=>handleNavigate(item)}>
                            <TouchableOpacity onPress={()=>handleAddToWishlist(item)}>
                                {hart? <AntDesign name="hearto" size={25} color={color.black} style={responsiveStyle.hartImage}/> : <AntDesign name="heart" size={25} color={color.red} style={responsiveStyle.hartImage}/>}
                            </TouchableOpacity>
                            <Image source={{uri:item.image}} style={responsiveStyle.itemImages}/>
                            <Text numberOfLines={1} style={responsiveStyle.itemName}>{item.name}</Text>
                            <Text numberOfLines={2} style={responsiveStyle.itemContent}>{item.description}</Text>
                            <View style={responsiveStyle.priceContainer}>
                                <Text style={responsiveStyle.price}>{item.price}</Text>
                                <View style={responsiveStyle.plusTouch}>
                                <TouchableOpacity onPress={()=>handleAddToCart(item)}><Text style={responsiveStyle.plus}>+</Text></TouchableOpacity>
                                </View>
                            </View> 
                        </TouchableOpacity>
                    )
                }}/>
            </View>
        </View>
    )
}

export default ProductScroll