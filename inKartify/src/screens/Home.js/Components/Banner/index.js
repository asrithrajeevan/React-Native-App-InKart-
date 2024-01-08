import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, View, TouchableOpacity, ViewBase } from 'react-native';
import style from './style';
import { useDimentionsContext } from '../../../../context';
import firestore  from "@react-native-firebase/firestore";      // for accessing the banner data.

const Banner = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const  [ bannerItems, setBannerItems] = useState([])

    useEffect(() => {
        getBanners()  //when the page render at that time the retrive the banners from the datastore.
    }, [])

    // for accessing the banner datas from the data store.
    const getBanners = async () => {
        await firestore().collection('Banners').get().then((snapshot)=>{   // the data would the located in snapshot.
            if(snapshot.empty){
                // console.log("Snap shot values are empty");
            }else{
                const result = []
                // console.log(snapshot.docs);        // if the snapshot have values the values are in the docs. So that we can use the docs to retrive the values.
                snapshot.docs.forEach(doc => {    // the datas wold be loacated as array formate and we can access it by using foreach.
                    if(doc.exists){
                        result.push(doc.data()) 
                    }
                })
                setBannerItems(result)      

                // snapshot.docs.map((item, index)=>{
                //     console.log('map-->',item);
                // })
            }   
        }).catch(err => console.log('err --->>',err))
    }

    // console.log('bannerItems--->>',bannerItems);
 
    return(
        <View>
            <FlatList 
                data={bannerItems}
                horizontal
                keyExtractor={(itemId, index)=>String(index)}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>{
                    return(
                        // ImageBackground is react component
                        <ImageBackground source={{uri:item.image}} style={responsiveStyle.banner}>
                            <View style={responsiveStyle.innerBannerView}>
                                <Text style={responsiveStyle.head}>
                                    {item.head}
                                </Text>
                                <Text style={responsiveStyle.content}>
                                    {item.desc}
                                </Text>
                                <TouchableOpacity style={responsiveStyle.touch}>
                                    <Text style={responsiveStyle.touchText}>Shop Now</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground> 
                    )
                }}
            />
        </View>
    )
}

export default Banner