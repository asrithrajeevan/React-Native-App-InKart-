import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./style";
import StarRating from 'react-native-star-rating-widget';
import { useDimentionsContext } from "../../context";
import { Image } from "react-native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import HeaderCommonRight from "../../components/CommonHeaderRight";
import ActionSheet from 'react-native-actions-sheet';
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";

const Review = () => {
    const ActionSheetRef = useRef();
    const navigation = useNavigation();
    const dimensions = useDimentionsContext();
    const route = useRoute();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const [rating, setRating] = useState(0);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 18, fontFamily:'Lato-Bold',fontWeight:'700', color: 'black' }}>Products Details</Text>
                </View>
              ),
            headerLeft:()=> <HeaderCommonLeft type={'back'} />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20},
            headerRight:()=> <HeaderCommonRight handlePressIcon={handleActionSheet} plus={true} />,
            },
        )
    }, [])

    const handleActionSheet = () => {
        ActionSheetRef.current.show()
      };

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
            <View style={responsiveStyle.reviewInnerContainer}>
                <View style={responsiveStyle.reviewerProfileContainer}>
                    <View style={responsiveStyle.profileView}>
                        <Image source={require('../../assets/images/profilePic.png')} style={responsiveStyle.profileImage}/>
                    </View>
                    <View style={responsiveStyle.profileName}>
                        <View style={responsiveStyle.profileNameView}>
                            <Text style={responsiveStyle.profileNameText}>Asrith Rajeevan</Text>
                        </View>
                        <View style={responsiveStyle.starView}>
                            <StarRating starSize={15} rating={rating} onChange={setRating} />
                        </View>
                    </View>
                </View>
                <View style={responsiveStyle.reviewText}>
                    <Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.
                    </Text>
                </View>

                <ActionSheet ref={ActionSheetRef}>
                    <View style={{padding:20}}>
                        <Text style={{fontFamily:'Lato-Bold', fontSize:20}}>Write a review</Text>
                        <StarRating starSize={35} rating={rating} onChange={setRating} />
                        <CustomeTextInput placeholder={'Write here'} multiline={true}/>
                        <CostomeBotton type={'primary'} buttonText={'Submit Your Review'}/>
                    </View>
                </ActionSheet>
            </View>
        </ScrollView>
    )
}

export default Review