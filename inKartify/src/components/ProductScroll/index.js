import React, { useEffect, useState } from 'react';
import {FlatList, Image, Text, View, } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../context';
import color from '../common/colors';
import CommonSectionHeader from '../CommoenSectionHeader';
import firestore  from "@react-native-firebase/firestore";


const ProductScroll = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [newProducts, setRecentItem] = useState([])


    useEffect(() => {
        getItems();
    }, [])
    
    const getItems = async () => {
        await firestore().collection('Product').get().then(snapshot=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach((doc) => {
                    if(doc.exists){
                        result.push(doc.data())
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

            <CommonSectionHeader head={'Newly added'} content={'Pay less, Get More.'}/>

            <View style={responsiveStyle.scrollView}>
                <FlatList 
                    data={newProducts} 
                    horizontal 
                    keyExtractor={(itemId, index)=>String(index)}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item, index})=>{
                    return(
                        <View style={responsiveStyle.flatListContainer}>
                            <Image source={require('../../assets/images/heartWhite.png')} style={responsiveStyle.hartImage}/>
                            <Image source={{uri:item.image}} style={responsiveStyle.itemImages}/>
                            <Text numberOfLines={1} style={responsiveStyle.itemName}>{item.name}</Text>
                            <Text numberOfLines={2} style={responsiveStyle.itemContent}>{item.description}</Text>
                            <View style={responsiveStyle.priceContainer}>
                                <Text style={responsiveStyle.price}>{item.price}</Text>
                                <View style={responsiveStyle.plusTouch}>
                                <Text style={responsiveStyle.plus}>+</Text>
                                </View>
                            </View>
                            
                        </View>
                    )
                }}/>
            </View>
        </View>
    )
}

export default ProductScroll