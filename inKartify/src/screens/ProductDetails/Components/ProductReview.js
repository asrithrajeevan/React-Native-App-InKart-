import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import color from "../../../components/common/colors";
import style from "./style";
import { useDimentionsContext } from "../../../context";
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import StarRating from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";


const ProductReview = props =>{
    const {product} = props
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const [rating, setRating] = useState(4.5);
    const navigation = useNavigation()
    const handleNavigate = () =>{
        navigation.navigate('Review',{product:product})
    }
    return(
        <View>
            <View style={responsiveStyle.reviewContainer}>
                <View>
                    <Text>Product Review(1)</Text>
                </View>
                <TouchableOpacity onPress={handleNavigate} style={responsiveStyle.seeAllView}>
                    <Text style={responsiveStyle.seeAll}>See All</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} color={color.primaryGreen} />
                </TouchableOpacity>
            </View>
            
            <View style={responsiveStyle.reviewInnerContainer}>
                <View style={responsiveStyle.reviewerProfileContainer}>
                    <View style={responsiveStyle.profileView}>
                        <Image source={require('../../../assets/images/profilePic.png')} style={responsiveStyle.profileImage}/>
                    </View>
                    <View style={responsiveStyle.profileName}>
                        <View style={responsiveStyle.profileNameView}>
                            <Text style={responsiveStyle.profileNameText}>Asrith Rajeevan</Text>
                        </View>
                        <View style={responsiveStyle.starView}>
                            <StarRating starSize={15} rating={rating} onChange={()=>{}} /> 
                        </View>
                    </View>
                </View>
                <View style={responsiveStyle.reviewText}>
                    <Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default ProductReview