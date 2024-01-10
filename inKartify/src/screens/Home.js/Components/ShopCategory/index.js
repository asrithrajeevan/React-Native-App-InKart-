import { useDimentionsContext } from '../../../../context';
import color from '../../../../components/common/colors';
import { updateCategories } from '../../../../storage/action';
import style from './style';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore  from "@react-native-firebase/firestore"; 
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ShopCategory = () => {
    const dimensions = useDimentionsContext();
    const dispatch = useDispatch()
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const [categories, setCategories] = useState([]);
    const navigation = useNavigation()
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
                        const responseData = {id:item.id, ...item?.data()} // by writing like this we could get whole data with its firbase id
                        // console.warn('responseData===}',responseData);
                        // result.push(item.data())
                        result.push(responseData)
                    }
                })
                setCategories(result)
                // console.warn('result-categories',result);
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

    // navigate with index as a parameter to the Categary pages
    const handleNavigate = (index) =>{
        navigation.navigate('Category',{itemIndex:index})
    }

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
                    <TouchableOpacity onPress={()=>handleNavigate(index)} style={responsiveStyle.innerView}>
                        <View style={[responsiveStyle.imageView,{backgroundColor:categorieColor}]}>
                            <Image source={{uri : item.image}} style={responsiveStyle.image}/>
                        </View>
                        <Text style={responsiveStyle.itemName}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

export default ShopCategory