import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDimentionsContext } from "../../context";
import style from './style';
import { useNavigation } from "@react-navigation/native";


const CommonSectionHeader = props =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
    const navigation = useNavigation()
    return(
        <View style={responsiveStyle.headView}>
            <View>
                <Text style={responsiveStyle.headText}>{props.head}</Text>
                <Text style={responsiveStyle.contentText}>{props.content}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Shop",{type:'all'})} style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                <Text style={responsiveStyle.seeAll}>See All</Text>
                <Image source={require('../../assets/images/right-arrow.png')} style={{width:12, height:12, marginLeft:5}}/>
            </TouchableOpacity>
        </View>
    )
}

export default CommonSectionHeader;