import React from 'react'
import style from './style';
import { Text, View } from 'react-native';
import { useDimentionsContext } from '../../context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CommonBotton = props =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)

    return(
        <TouchableOpacity onPress={props.onButtonPress} style={responsiveStyle.container}>
            <Text style={responsiveStyle.BottonTextStyle}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default CommonBotton