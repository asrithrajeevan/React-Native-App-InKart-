import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import style from "./style";
import { useDimentionsContext } from "../../context";
import HeaderCommonRight from "../../components/CommonHeaderRight";
import CostomeSearch from "../../components/CostomeSearchBox";
import { useSelector } from "react-redux";
import color from "../../components/common/colors";

const Shop = () =>{
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const {updateCategories} = useSelector(state => state);
    console.warn(updateCategories);
    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft type={'back'} />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20},
            headerRight:()=> <HeaderCommonRight cart={true} />,
            },
        )
    }, [])
    const handleRenderItem = (({item, index})=>{
        return(
            <View style={responsiveStyle.container}>
                <TouchableOpacity style={responsiveStyle.categoryScroll}>
                    <Text style={responsiveStyle.categoryName}>{item.name}</Text>
                </TouchableOpacity>
            </View>

        )
    })
    return(
        <View>
            <FlatList 
                data={updateCategories} 
                horizontal 
                showsHorizontalScrollIndicator={false}
                renderItem={handleRenderItem}
                />
            <CostomeSearch filter={true}/>
        </View>
    )
}
export default Shop