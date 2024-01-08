import React, { useState } from 'react';
import {FlatList, Image, Text, View, } from 'react-native';
import style from './style';
import color from '../common/colors';
import CommonSectionHeader from '../CommoenSectionHeader';
import { useDimentionsContext } from '../../context';

const OfferProducts = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);

    const newProducts = [
        {
            id : 0,
            name : 'Shoes',
            content : 'High quality shoes',
            price : 1500,
            image : require('../../assets/images/shoes.png'),
            off : '50%',
        },    
        {
            id : 1,
            name : 'Rubix Cube',
            content : 'Good quality Cube',
            price : 1499,
            image : require('../../assets/images/newCube.png'),
            off : '50%'
        },    
        {
            id : 2,
            name : 'Laptop',
            content : 'High performance laptops',
            price : 45000,
            image : require('../../assets/images/newLaptop.png'),
            off : '50%'
        },    
        {
            id : 3,
            name : 'Chair',
            content : 'Good quality chair',
            price : 1300,
            image : require('../../assets/images/newChire.png'),
            off : '50%'
        },    
        {
            id : 4,
            name : 'Sofa',
            content : 'Whater proof sofasets',
            price : 20500,
            image : require('../../assets/images/newSofa.png'),
            off : '50%'
        }
    ]


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

            <CommonSectionHeader head={'Say hellow to offers!'} content={'Best price for ever for all the time.'}/>
            
            <View>
                <FlatList data={newProducts} 
                showsVerticalScrollIndicator={false} 
                keyExtractor={(itemId, index)=>String(index)}
                renderItem={({item, index})=>{
                    return(
                        <View style={responsiveStyle.flatListContainer}>
                            <Image source={item.image} style={responsiveStyle.itemImages}/>
                            <View style={responsiveStyle.itemContentView}>
                                <Text numberOfLines={1} style={responsiveStyle.itemName}>{item.name}</Text>
                                <Text numberOfLines={2} style={responsiveStyle.itemContent}>{item.content}</Text>
                                <View style={responsiveStyle.priceOffQntyView}>
                                    <View style={responsiveStyle.priceOffView}>
                                        <Text numberOfLines={1} style={responsiveStyle.itemPrice}>₹ {item.price}</Text>
                                        <View style={responsiveStyle.offView}>                 
                                            <Text numberOfLines={1} style={responsiveStyle.itemOff}>{item.off}</Text>                         
                                        </View>
                                    </View>
                                    <View style={responsiveStyle.qntView} >
                                        <Text style={responsiveStyle.QntyText1}>-</Text>
                                        <Text style={responsiveStyle.QntyText2}>0</Text>
                                        <Text style={responsiveStyle.QntyText1}>+</Text>
                                    </View>
                                </View>
                            </View>             
                        </View>
                    )
                }}/>
            </View>
        </View>
    )
}

export default OfferProducts