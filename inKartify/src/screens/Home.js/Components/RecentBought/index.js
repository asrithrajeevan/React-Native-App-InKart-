import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../../../context';

const RecentItems = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);

    const recentItem=[
        {itemId:1 , itemImg:require('../../../../assets/images/recentItem2.png') },
        {itemId:2 , itemImg:require('../../../../assets/images/recentItem3.png') },
        {itemId:3 , itemImg:require('../../../../assets/images/recentItem4.png') },
        {itemId:4 , itemImg:require('../../../../assets/images/recentItem5.png') },
        {itemId:0 , itemImg:require('../../../../assets/images/recentItem6.png') },
        {itemId:1 , itemImg:require('../../../../assets/images/recentItem7.png') },
        {itemId:2 , itemImg:require('../../../../assets/images/recentItem8.png') },
        {itemId:3 , itemImg:require('../../../../assets/images/recentItem9.png') },
        {itemId:4 , itemImg:require('../../../../assets/images/recentItem10.png') }, 
        {itemId:3 , itemImg:require('../../../../assets/images/recentItem11.png') },
        {itemId:4 , itemImg:require('../../../../assets/images/recentItem12.png') },
    ]

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
                    <View style={responsiveStyle.contentView}>
                        <Image source={item.itemImg} style={responsiveStyle.image}/>
                    </View>
                )
            }}/>
        </View>
    )
}

export default RecentItems