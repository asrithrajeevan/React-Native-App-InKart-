import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../../context';
import firestore  from '@react-native-firebase/firestore';
import color from '../../../components/common/colors';
import { useNavigation } from '@react-navigation/native';
import HeaderCommonLeft from '../../../components/CommonHeaderLeft';

const TrendingItem = () => {
    const [getItem, setItem] = useState([])
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({headerLeft :() => <HeaderCommonLeft />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
        })
    })

    useEffect(()=>{
        recentItem()
    },[])

    const recentItem = async() =>{
        await firestore().collection('Categories').get().then((snapshot)=>{
            if(!snapshot.empty){
                const result = []
                snapshot.docs.forEach(item =>{
                    if(item.exists){
                        result.push(item.data())
                    }
                })
                setItem(result)
                console.log('Categories---->',categories);
            }
        }).catch(err =>console.log(err))
    } 

    return(
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>Trending items</Text>
            <FlatList 
            data={getItem} 
            horizontal
            keyExtractor={(itemId, index)=>String(index)}
            showsHorizontalScrollIndicator={false} 
            renderItem={({item,index})=>{
            const categorieColor = index % 4 === 0 ? color.category1 : index % 4 === 1 ? color.category2 : index % 4 === 2 ? color.category3 : color.category4
                return(
                    <View style={[responsiveStyle.contentView,{backgroundColor:categorieColor}]}>
                        <Image source={{uri:item.image}} style={responsiveStyle.image}/>
                    </View>
                )
            }}/>
        </View>
    )
}

export default TrendingItem