import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CommonHeader from "../../components/CommonHeader";
import CostomeSearch from "../../components/CostomeSearchBox";
import Banner from "./Components/Banner";
import RecentItems from "./Components/RecentBought";
import ShopCategory from "./Components/ShopCategory";
import ProductScroll from "../../components/ProductScroll";
import OfferProducts from "../../components/OfferProducts";
import { useDispatch, useSelector } from "react-redux";
import firestore  from "@react-native-firebase/firestore";
import { updateWishlist } from "../../storage/action";
import { useIsFocused } from "@react-navigation/native";

const Home = () => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const userId = useSelector(state => state.userId)
    const scrollRef = useRef(null);
    
    useEffect(()=>{
        scrollRef.current.scrollTo({y : 0, animated:true})
    },[isFocused])

    useEffect(() => {
        getWishlist()
    }, [])
    
    const getWishlist = async () => {
        await firestore().collection('Wishlist').where('userId','==', userId).get().then(snapshot => {
            if(!snapshot.empty){
                const result =[]
                snapshot.docs.forEach(doc=>{
                    if(doc.exists){
                        const responseData = {id:doc.id, ...doc?.data()}
                        result.push(responseData.productId)
                    }
                })
                dispatch(updateWishlist(result))
            }
        })
    }

    return(
        <View style={styles.main}>
            <CommonHeader />
            <ScrollView ref={scrollRef} nestedScrollEnabled showsVerticalScrollIndicator={false} style={styles.container}> 
                <CostomeSearch onChangeText={()=>{}}/>
                <Banner />
                <RecentItems />
                <ShopCategory />
                <ProductScroll getWishlist={getWishlist()} />
                <OfferProducts />
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Didn't find what you are looking for...?</Text>
                    <View style={styles.browsView}>
                        <Text style={styles.browsText}>
                            Brows Category
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default Home

//we change the View component to Scrollview after finishing the category tasks