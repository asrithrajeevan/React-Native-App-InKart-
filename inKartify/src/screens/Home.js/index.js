import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CommonHeader from "../../components/CommonHeader";
import CostomeSearch from "../../components/CostomeSearchBox";
import Banner from "./Components/Banner";
import RecentItems from "./Components/RecentBought";
import ShopCategory from "./Components/ShopCategory";
import ProductScroll from "../../components/ProductScroll";
import OfferProducts from "../../components/OfferProducts";

const Home = () => {
    return(
        <View style={styles.main}>
            <CommonHeader />
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={styles.container}> 
                <CostomeSearch />
                <Banner />
                <RecentItems />
                <ShopCategory />
                <ProductScroll />
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