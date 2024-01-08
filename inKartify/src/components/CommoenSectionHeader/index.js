import React from "react";
import { Text, View } from "react-native";
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
            <Text style={responsiveStyle.seeAll} onPress={()=>navigation.navigate("Shop")}>See All</Text>
        </View>
    )
}

export default CommonSectionHeader;