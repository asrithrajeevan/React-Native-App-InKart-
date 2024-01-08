import React from "react";
import { View, Text, ScrollView } from "react-native";
import CostomeSearch from "../../components/CostomeSearchBox";
import style from "./style";
import OfferProducts from "../../components/OfferProducts";
import TrendingItem from "./Component";

const Search = () => {
    return(
        <View style={style.main}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={style.container}>
            <CostomeSearch />
            <TrendingItem />
            <OfferProducts />
        </ScrollView>
    </View>
    )
}

export default Search