import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import OrderDetails from "./Component";
import CommonBotton from "../../components/CommonBotton";
import firestore  from "@react-native-firebase/firestore";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
import { updateCartCount } from "../../storage/action";
import CommonEmpty from "../../components/CommonEmpty";

const Cart = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)
    const [cartItem, setCartItem]= useState(0)
    const userId = useSelector(state=>state.userId)
    const cartCount = useSelector(state=>state.cartCount)
    const email = useSelector(state=>state.email)
    const mobilenumber = useSelector(state=>state.mobilenumber)

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [total, setTotal] = useState(0)
    const [charges, setCharges] = useState(0)
    // console.warn('cartItem ==> ',cartItem)   
    const offersTickets = {   
            offer : '41',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.500',
            code : 'pw332',
        }
    // re-render this page whenever we came the page
    const isFocused = useIsFocused()
    // console.warn('isFocused---',isFocused);
    useEffect(()=> {
        if(isFocused){
            getCartProduct()
        }
    },[isFocused])
    
    useEffect(() => {
        // console.warn('cartItem==>',cartItem.length);
        if(cartItem.length > 0){
            setCharges(50)
        }else{
            setCharges(0)
        }
    },[cartItem])

    // console.warn('cartItem-->',cartItem);
    const getCartProduct = async () =>{
        await firestore().collection('Cart').where('userId','==',userId).get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                let totalAmount = 0
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        // result.push(doc.data())
                        const amount = parseFloat(doc?.data().price) * parseInt(doc?.data().quantity)
                        totalAmount = totalAmount+amount
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setTotal(totalAmount)
                setCartItem(result)
            }else{
                setCartItem([])
                setTotal(0)
            }
        }).catch(err=>console.log('err--->',err))    
    }
    
    const updateArray = productInfo => {
        const result = cartItem.filter( x => {
            return x.id !== productInfo.id
        })
        setTotal(total-parseFloat(productInfo.price))
        setCartItem(result)
        dispatch(updateCartCount(cartCount-1))
    }

    const handleTotal = (type, productInfo) =>{
        if(type == 'add'){
            setTotal(total+parseFloat(productInfo.price))
        }else{
            setTotal(total-parseFloat(productInfo.price))
        }
    }

    const onButtonPress = () =>{
        if(cartItem.length > 0){
            if(email == '' || mobilenumber == '' ){
                Snackbar.show({
                    text: 'You have to complete your profile to continue.',
                    backgroundColor : color.red,
                    duration: Snackbar.LENGTH_SHORT,
                }); 
            }else{
                navigation.navigate('AddAddress', {cartItem : cartItem, total: total, charges: charges, getCartProduct : getCartProduct()})
            }
        }else{
            Snackbar.show({
                text: 'Your cart is empty',
                backgroundColor : color.red,
                duration: Snackbar.LENGTH_SHORT,
            }); 
        }
    }

    return(
        <View style={responsiveStyle.container}>
            <FlatList 
                data={cartItem} 
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>{
                    return(
                        <View style={{alignItems:'center',paddingVertical:25}}>
                            <CommonEmpty title={'Cart is Empty'}/>
                            <TouchableOpacity style={{padding:10}} onPress={()=>navigation.navigate('Shop',{type:'Shop'})}><Text>Go to Shop</Text></TouchableOpacity>
                        </View>
                    )
                    }}
                keyExtractor={(item, index)=>String(index)}
                extraData={cartItem} // for reloding our array after removing the item from cart                 // callReload is a method that reload automaticallly after remove the item from the cart
                renderItem={({item, index})=><RenderItem item={item} index={index} updateArray={updateArray} handleTotal={handleTotal}/>} // rendering the react native component
                // it will disply the remainig portion at the end part of the flatlist
                ListFooterComponent={()=>{
                    return( 
                            <View style={responsiveStyle.offerTicketContainerView}>
                                <View style={responsiveStyle.offersTicketView}>
                                    <View style={responsiveStyle.ticketRoundLeftView}> 
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                    </View>
                                        
                                    <View style={responsiveStyle.ticketContainer}>
                                        <View style={responsiveStyle.ticketContentView}>
                                            <View>
                                                <Text style={responsiveStyle.ticketOfferText}>{offersTickets.offer}</Text>
                                            </View>
                                            <View style={{marginHorizontal:5}}>
                                                <Text style={responsiveStyle.percentage}>%</Text>
                                                <Text style={responsiveStyle.offText}>OFF</Text>
                                            </View>
                                            <View style>
                                                <Text style={responsiveStyle.headText}>{offersTickets.head}</Text>
                                                <Text style={responsiveStyle.contentText}>{offersTickets.content}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={responsiveStyle.ticketMiddleRoundView}>
                                        <View style={responsiveStyle.ticketMiddleUpperRound}></View>
                                        <View style={responsiveStyle.ticketMiddleBottomRound}></View>
                                    </View>
                                    <View style={responsiveStyle.ticketRightContainer}>
                                        <View style={responsiveStyle.ticketRightContent}>
                                            <Text style={responsiveStyle.useCodeText}>Use Code</Text>
                                            <View style={responsiveStyle.codeView}>
                                                <Text style={responsiveStyle.itemCode}>{offersTickets.code}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={responsiveStyle.responsiveStyle}>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                        <View style={responsiveStyle.ticketRoundStyles}></View>
                                    </View> 
                                </View>

                            <OrderDetails total={total} charges={charges}/>

                            <CommonBotton name={"Proceed to Checkout"} onButtonPress={onButtonPress}/>
                        </View>
                    )
                }}
                />
        </View>
    )
}


const RenderItem = ({item, index, updateArray, handleTotal})=>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [qun, setQun] = useState(item.quantity)
    const navigation = useNavigation()
    const userId = useSelector(state => state.userId); // user id is important to store in cart.
    
    useEffect(()=>{
        setQun(item.quantity)
    },[item])

    const addToCart = async () =>{
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',item.productId).get().then(snapshot => {
        // item already existing
        firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
            quantity:parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
        })
        handleTotal('add', item)
        Snackbar.show({
            text: 'Item added to cart',
            backgroundColor : color.primaryGreen,
            duration: Snackbar.LENGTH_LONG,
        });
        })
    }
    const removeFromCart = async () =>{
        if(qun <= 1){
            // remove from cart
            await firestore().collection('Cart').doc(item.id).delete().then(() => { // after delete the item after we want to remove teh data from the array
                updateArray(item)     // we can write the call reload with the index , like parameter
            })
        }else{
            // update Quantity(minimizing)
            console.warn('working');
            setQun(qun-1)
            await firestore().collection('Cart').doc(item.id).update({
                quantity : parseInt(item.quantity, 10) - 1
            })
            handleTotal('minus', item)
        }
    }
    const navigationToProductDetails = () =>{
        navigation.navigate('ProductDetails',{product:item})
    }

    return(
        <TouchableOpacity onPress={navigationToProductDetails} style={responsiveStyle.flatListContainer}>
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
                    <View style={responsiveStyle.qntView}>
                        <TouchableOpacity onPress={removeFromCart}><Text style={responsiveStyle.QntyText1}>-</Text></TouchableOpacity>
                        <Text style={responsiveStyle.QntyText2}>{qun}</Text>
                        <TouchableOpacity onPress={
                            ()=>{
                                setQun(qun+1)
                                addToCart()
                            }
                        }>
                        <Text style={responsiveStyle.QntyText1}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>    
        </TouchableOpacity> 
    )
}


export default Cart