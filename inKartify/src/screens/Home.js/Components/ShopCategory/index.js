import React, { useEffect, useState } from 'react';
import { Image, Text, View, } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../../../context';
import { FlatList } from 'react-native-gesture-handler';
import color from '../../../../components/common/colors';
import firestore  from "@react-native-firebase/firestore"; 
import { useDispatch } from 'react-redux';
import { updateCategories } from '../../../../storage/action';

const ShopCategory = () => {
    const dimensions = useDimentionsContext();
    const dispatch = useDispatch()
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
    },[])

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
                console.warn('result-categories',result);
                dispatch(updateCategories(result)) // storing our categories to redux
            }
        }).catch(err =>console.log(err))
    }

    // const Categories = [
    //     {id : 0, name : 'Gadjets', image:require('../../../../assets/images/recentItem6.png')},
    //     {id : 1, name : 'Groceries', image:require('../../../../assets/images/recentItem10.png')},
    //     {id : 2, name : 'Clothing', image:require('../../../../assets/images/clothes.png')},
    //     {id : 3, name : 'Shoes', image:require('../../../../assets/images/shoes.png')},
    //     {id : 4, name : 'Vegetables', image:require('../../../../assets/images/vegetables.png')},
    //     {id : 5, name : 'Stationaries', image:require('../../../../assets/images/stationary.png')},
    //     {id : 6, name : 'Electronics', image:require('../../../../assets/images/recentItem3.png')},

    // ]

    return(
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>Shop By Category</Text>
            <FlatList
                data={categories}
                numColumns={4}
                // horizontal
                keyExtractor={(itemId, index)=>String(index)}
                contentContainerStyle={responsiveStyle.FlatList} 
                renderItem={({item, index})=>{
                    const categorieColor = index % 4 === 0 ? color.category1 : index % 4 === 1 ? color.category2 : index % 4 === 2 ? color.category3 : color.category4
                return(
                    <View style={responsiveStyle.innerView}>
                        <View style={[responsiveStyle.imageView,{backgroundColor:categorieColor}]}>
                            <Image source={{uri : item.image}} style={responsiveStyle.image}/>
                        </View>
                        <Text style={responsiveStyle.itemName}>{item.name}</Text>
                    </View>
                )
            }}/>
        </View>
    )
}

export default ShopCategory