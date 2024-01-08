import React, { useEffect, useState } from 'react';
import {FlatList, Image, Text, TouchableOpacity, View, } from 'react-native';
import style from './style';
import color from '../common/colors';
import CommonSectionHeader from '../CommoenSectionHeader';
import { useDimentionsContext } from '../../context';
import firestore  from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import { updateCartCount } from '../../storage/action';

const OfferProducts = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [OfferItem, setOfferItem] = useState()
    // console.warn('OfferItem==>',OfferItem)
    useEffect(() => {
        getOfferProduct()
    }, [])
    
    const getOfferProduct = async() =>{
        await firestore().collection('Product').get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        // result.push(doc.data())
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setOfferItem(result)
            }
        }).catch(err=>console.log('err--->',err))    
    }
    // const newProducts = [
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

            <View style={{padding:10}}>
                <CommonSectionHeader head={'Say hellow to offers!'} content={'Best price for ever for all the time.'}/>
            </View> 
            <View>
                <FlatList data={OfferItem} 
                showsVerticalScrollIndicator={false} 
                keyExtractor={(itemId, index)=>String(index)}
                renderItem={({item, index})=><RenderItem item={item} index={index}/>} />
            </View>
        </View>
    )
}

const RenderItem = ({item, index})=>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const navigation = useNavigation()
    const [qun, setQun] = useState(0)
    const dispatch = useDispatch()
    const {userId, cartCount} = useSelector(state => state); // user id is important to store in cart.
    console.warn(qun);
    const handleNavigate = () =>{
        navigation.navigate('ProductDetails',{product:item})
    }

    const addToCart = async () =>{
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
    return(
        <TouchableOpacity onPress={()=>handleNavigate()} style={responsiveStyle.flatListContainer}>
            <Image source={{uri:item.image}} style={responsiveStyle.itemImages}/>
            <View style={responsiveStyle.itemContentView}>
                <Text numberOfLines={1} style={responsiveStyle.itemName}>{item.name}</Text>
                <Text numberOfLines={2} style={responsiveStyle.itemContent}>{item.description}</Text>
                <View style={responsiveStyle.priceOffQntyView}>
                    <View style={responsiveStyle.priceOffView}>
                        <Text numberOfLines={1} style={responsiveStyle.itemPrice}>₹ {item.price}</Text>
                        <View style={responsiveStyle.offView}>                 
                            <Text numberOfLines={1} style={responsiveStyle.itemOff}>50%</Text>                         
                        </View>
                    </View>
                    <View style={responsiveStyle.qntView} >
                    <TouchableOpacity onPress={
                        ()=>{
                            setQun(qun<=0? qun :qun-1 )
                            addToCart()
                        }
                        }><Text style={responsiveStyle.QntyText1}>-</Text></TouchableOpacity>
                        <Text style={responsiveStyle.QntyText2}>{qun}</Text>
                    <TouchableOpacity onPress={
                        ()=>{
                            setQun(qun+1)
                            addToCart()
                            }
                        }><Text style={responsiveStyle.QntyText1}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>             
        </TouchableOpacity>
    )
}

export default OfferProducts