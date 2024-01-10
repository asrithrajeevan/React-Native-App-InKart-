import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../../../context';
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const RecentItems = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [recentItem, setRecentItem] =useState()
    const navigation=useNavigation()

    // const recentItem=[
    //     {itemId:1 , itemImg:require('../../../../assets/images/recentItem2.png') },
    //     {itemId:2 , itemImg:require('../../../../assets/images/recentItem3.png') },
    //     {itemId:3 , itemImg:require('../../../../assets/images/recentItem4.png') },
    //     {itemId:4 , itemImg:require('../../../../assets/images/recentItem5.png') },
    //     {itemId:0 , itemImg:require('../../../../assets/images/recentItem6.png') },
    //     {itemId:1 , itemImg:require('../../../../assets/images/recentItem7.png') },
    //     {itemId:2 , itemImg:require('../../../../assets/images/recentItem8.png') },
    //     {itemId:3 , itemImg:require('../../../../assets/images/recentItem9.png') },
    //     {itemId:4 , itemImg:require('../../../../assets/images/recentItem10.png') }, 
    //     {itemId:3 , itemImg:require('../../../../assets/images/recentItem11.png') },
    //     {itemId:4 , itemImg:require('../../../../assets/images/recentItem12.png') },
    // ]
    useEffect(() => {
        getrecentItem()
    }, [])
    
    const getrecentItem = async () => {
        await firestore().collection('Product').get().then((snapshot)=>{
            if(!snapshot.empty){
                const result = []
                // console.log(snapshot.docs)
                snapshot.docs.forEach(item =>{
                    if(item.exists){
                        const respData = {id : item.id, ...item.data()}
                        result.push(respData)
                    }
                })
                setRecentItem(result)
            }
         }).catch(err =>console.log(err))
    }
    const handleNavigation = (item) =>{
        navigation.navigate('ProductDetails',{product:item})
    }
    return(
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>Buy from Recently Bought</Text>
            <FlatList 
            data={recentItem} 
            horizontal
            keyExtractor={(itemId, index)=>String(index)}
            showsHorizontalScrollIndicator={false} 
            renderItem={({item,index})=>{
                return(
                    <TouchableOpacity onPress={()=>handleNavigation(item)} style={responsiveStyle.contentView}>
                        <Image source={{uri:item.image}} style={responsiveStyle.image}/>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

export default RecentItems