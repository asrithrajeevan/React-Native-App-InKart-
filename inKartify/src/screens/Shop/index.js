import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import style from "./style";
import { useDimentionsContext } from "../../context";
import HeaderCommonRight from "../../components/CommonHeaderRight";
import CostomeSearch from "../../components/CostomeSearchBox";
import { useSelector } from "react-redux";
import color from "../../components/common/colors";
import firestore  from "@react-native-firebase/firestore"; 
import CommonEmpty from "../../components/CommonEmpty";

const Shop = props => {
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const {updateCategories} = useSelector(state => state);
    // console.warn(updateCategories);
    const route = useRoute() 
    const {type} = route.params //Passing type from navigation
    // console.warn('type::==>',type);
    const [head, setHead] = useState(type)
    const [product, setProductItem] = useState([])

    useEffect(()=>{
        setHead(type)
    },[route]) // when rendering into this screen the default head wantto set as Shope

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 18, fontFamily:'Lato-Bold',fontWeight:'700', color: 'black' }}>{head==='all'? "Shop":head}</Text>
                </View>
              ),
            headerLeft:()=> <HeaderCommonLeft type={'back'} />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20},
            headerRight:()=> <HeaderCommonRight cart={true} />,
            // title : 'Shopp',
            },
        )
    }, [head]) // for changing the head
    
    // Product API
    useEffect(() => {
        getItems();
    }, [route])
    
    const getItems = async () => {
        await firestore().collection('Product').get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        // result.push(doc.data()) //in this way will not get the id use below
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setProductItem(result)
            }
        }).catch(err=>console.log('err--->',err))
    }
    // console.warn('product==>>',product);

    // Filter items according to the category
    const handleCategoryItemId = async (item) => {
        console.warn(item.id);
        setHead(item.name)
        await firestore().collection('Product').where('categoryId','==',item.id).get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        // result.push(doc.data())
                        const responseData = {id:doc.id, ...doc?.data()} // by writing like this we could get whole data with its firbase id
                        result.push(responseData)
                    }
                })
                setProductItem(result)
            }else{
                setProductItem([])
            }
        }).catch(err=>console.log('err--->',err))
    }
    const handleRenderItem = (({item, index})=>{
        return(
            <View style={responsiveStyle.container}>
                <TouchableOpacity onPress={()=>handleCategoryItemId(item)} style={responsiveStyle.categoryScroll}>
                    <Text style={responsiveStyle.categoryName}>{item.name}</Text>
                </TouchableOpacity>
            </View>

        )
    })
    // Epmty
    const handleEmptyProducts = () => {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <CommonEmpty title={'No Products Available'}/>
            </View>
        )
    }
    const handleProductDetails = item =>{
        navigation.navigate('ProductDetails',{product:item})
    }
    const handleProductsRender = (({item,index})=>{
        return(
            <TouchableOpacity style={responsiveStyle.shadowEffect} onPress={()=>handleProductDetails(item)}>
                <View style={responsiveStyle.flatListContainer}>
                    <Image source={{uri:item.image}} style={responsiveStyle.itemImages}/>
                    <View style={responsiveStyle.itemContentView}>
                        <Text numberOfLines={1} style={responsiveStyle.itemName}>{item.name}</Text>
                        <Text numberOfLines={2} style={responsiveStyle.itemContent}>{item.description}</Text>
                        <View style={responsiveStyle.priceOffQntyView}>
                            <View style={responsiveStyle.priceOffView}>
                                <Text numberOfLines={1} style={responsiveStyle.itemPrice}>₹ {item.price}</Text>
                                <View style={responsiveStyle.offView}>                 
                                    <Text numberOfLines={1} style={responsiveStyle.itemOff}>{item.off? item.off:'50%'}</Text>                         
                                </View>
                            </View>
                            <View style={responsiveStyle.qntView}>
                                <Text style={responsiveStyle.QntyText1}>-</Text>
                                <Text style={responsiveStyle.QntyText2}>0</Text>
                                <Text style={responsiveStyle.QntyText1}>+</Text>
                            </View>
                        </View>
                    </View> 
                </View>            
            </TouchableOpacity>
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
            <FlatList data={product}
                showsVerticalScrollIndicator={false}
                renderItem={handleProductsRender}
                ListEmptyComponent={handleEmptyProducts}
            />
        </View>

    )
}
export default Shop