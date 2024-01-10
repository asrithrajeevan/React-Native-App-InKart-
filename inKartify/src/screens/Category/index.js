import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, VirtualizedList, ImageBackground } from "react-native";
import CostomeSearch from "../../components/CostomeSearchBox";
import style from "./style";
import firestore from "@react-native-firebase/firestore";
import { useDimentionsContext } from "../../context";
import color from "../../components/common/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import { useSelector } from "react-redux";

const Category = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [CategoryIndex, setEachtCategoriesIndex] = useState(0);
    const navigation=useNavigation()
    const route = useRoute()
    const { itemIndex = 0 } = route?.params?? {}  // for firstly the itemIndex is going to undefined. So we can use this way
    useEffect(() => {
        setEachtCategoriesIndex(itemIndex)
    }, [itemIndex])
    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
            }
        )
        
    }, [])
    
    // console.warn(CategoryIndex);
    useEffect(() => {
        getCategories()
        getProducts()
    }, [])


    const getCategories = async () => {
       await firestore().collection('Categories').get().then((snapshot)=>{
            if(!snapshot.empty){
                const result = []
                // console.log(snapshot.docs)
                snapshot.docs.forEach(item =>{
                    if(item.exists){
                        result.push(item.data())
                    }
                })
                setCategories(result)
                setEachtCategoriesIndex(0)
            }
        }).catch(err =>console.log(err))
    }
    const updateCategories = useSelector(state=>state.updateCategories)  // we can easly access the category items after storing it to redux in home page. API calling of each pages are not necessary like above, we can access whole page using useSelector once it stored it using redux.


    // for getting product collection from firbase
    const getProducts = async () => {
        await firestore().collection('Product').get().then((snapshot)=>{

             if(!snapshot.empty){
                 const result = []
                 snapshot.docs.forEach(doc =>{
                    if(doc.exists){
                        const responseData = {id:doc.id, ...doc?.data()}
                        result.push(responseData)
                    }
                })
                setProducts(result)
                // console.warn('item-------->>',result);

            }
         }).catch(err =>console.log(err))
     }


    const handleCategorytouch = index => {
        // console.log('cate-item',index);
        setEachtCategoriesIndex(index)

    }
    const handleNavigate = (item) =>{
        navigation.navigate('ProductDetails',{product:item})
        // console.warn('item-item->',item);
    }
    return(
        <View style={responsiveStyle.main}>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
                <CostomeSearch />
                <View style={responsiveStyle.containerRowStyle}>
                    {/* side bar */}
                    <View>
                        <FlatList
                            data={updateCategories}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={responsiveStyle.styleFlatList}
                            renderItem={({item,index})=>{
                                return(
                                    // we can pass each item by using '()=> handleCategorytouch(item)'
                                    // <TouchableOpacity style={[responsiveStyle.catImageTouch,{backgroundColor : index === CategoryIndex? color.white : 'transparent',borderWidth : index === CategoryIndex? 1 : 'transparent' }]} onPress={()=>handleCategorytouch(index)}>
                                    //     <Image source={{uri:item.image}} style={responsiveStyle.catImage}/>
                                    // </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>handleCategorytouch(index)} style={[responsiveStyle.catImageTouch,{backgroundColor : index ==CategoryIndex ? color.white : 'transparent',borderWidth : index === CategoryIndex ? 5 : 0}]}>
                                        <Image source={{uri:item.image}} style={responsiveStyle.catImage}/>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    {/* content */}
                    <View>
                        <View style={responsiveStyle.rightScrollView}>
                            <ImageBackground source={require('../../assets/images/homebanner1.jpeg')} style={responsiveStyle.ImageBackground}>
                                <View style={responsiveStyle.bgImageTextView}>
                                    <Text numberOfLines={1} style={{fontFamily:'Lato-Bold', fontSize:20}}>
                                        {categories[CategoryIndex]?.name}
                                    </Text>
                                    <Text numberOfLines={3} style={{fontFamily:'Lato-regular', fontSize:15, width:180}}>
                                    {categories[CategoryIndex]?.description}
                                    </Text>
                                </View>
                            </ImageBackground>
                            <FlatList
                                data={products}
                                numColumns={3}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={responsiveStyle.productFlatStyle}
                                keyExtractor={(itemId, index)=>String(index)}
                                renderItem={({item,index})=>{
                                    return(
                                        <TouchableOpacity onPress={()=>handleNavigate(item)} style={responsiveStyle.productImageContainer}>
                                            <View style={responsiveStyle.ImageBg}>
                                                <Image source={{uri:item.image}} style={responsiveStyle.productImage}/>
                                            </View>
                                            <Text style={responsiveStyle.imageName}>{item.name}</Text>
                                            <Text style={responsiveStyle.imagePrice}>₹ {item.price}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Category