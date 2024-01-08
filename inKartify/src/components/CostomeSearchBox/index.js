import React from "react";
import {Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";
import { TextInput } from "react-native-gesture-handler";

const CostomeSearch = props => {
    const {filter} = {...props} // the filter willbe true when the order screen render.
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);

    return(
        <View style={filter? [responsiveStyle.newcontainer] : [responsiveStyle.container]}>
            <View style={filter? [responsiveStyle.newSearch] :[responsiveStyle.search]}>
                <View style={responsiveStyle.innerSearch}>
                    <Image source={require('../../assets/images/searchbar.png')} style={responsiveStyle.searchIcon} />
                    <TextInput placeholder="Search Here" selectionColor={color.EmeraldGreen} placeholderTextColor={color.black_level_3} style={responsiveStyle.textInput}/>
                </View>
                <Image source={require('../../assets/images/mic.png')}  style={responsiveStyle.micIcon} />
            </View>
            <TouchableOpacity><Text style={responsiveStyle.filterText}>{filter? 'Filter':null}</Text></TouchableOpacity>
        </View>
    )
}

export default CostomeSearch