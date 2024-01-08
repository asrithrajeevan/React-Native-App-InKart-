import React, { version } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useDimentionsContext } from "../../context";

const CustomFooter = ({state, descriptors, navigation}) => {
    // state.routes.map((routes, index)=>{
    //     console.log('---->',state.index);
    // })
    const dimensions = useDimentionsContext()
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)
    // console.log(dimensions);
        return(
            <View style={responsiveStyle.container}>

                { state.routes.map((routes, index) => {

                    const isFocused = state.index === index;    // it will be true state.index and index are equal.

                    const icon = routes.name === 'Home'? require('../../assets/images/home.png') 
                        :routes.name === 'Category'? require('../../assets/images/category.png') 
                        :routes.name === 'Search'? require('../../assets/images/search.png')
                        :routes.name === 'Offers'? require('../../assets/images/offers.png')
                        :require('../../assets/images/cart.png')

                    return(
                        <TouchableOpacity
                            key={index} 
                            onPress={()=>navigation.navigate(routes.name)} 
                            style={responsiveStyle.touchContainer}
                            >
                            <Image source={icon} style={responsiveStyle.iconStyle}/>
                            <Text style={responsiveStyle.footerText}>{routes.name}</Text>
                            {isFocused? <Text style={responsiveStyle.dotStyle}>_</Text>:null}
                            {routes.name=='Cart'? <View style={responsiveStyle.cartCountView}><Text style={responsiveStyle.count}>10</Text></View>:null}
                        </TouchableOpacity>
                    )
                } )}
            </View>
    )
}

export default CustomFooter




{/* <View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../../assets/images/home.png')} style={{width:25,height:25, resizeMode:'contain', marginTop:15}}/>
    <Text style={{fontFamily:'Lato-Regular', fontSize: 13, color:color.white}}>Home</Text>
</View>

<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../../assets/images/category.png')} style={{width:25,height:25, resizeMode:'contain', marginTop:15}}/>
    <Text style={{fontFamily:'Lato-Regular', fontSize: 13, color:color.white}}>Category</Text>
</View>

<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../../assets/images/search.png')} style={{width:25,height:25, resizeMode:'contain', marginTop:15}}/>
    <Text style={{fontFamily:'Lato-Regular', fontSize: 13, color:color.white}}>Search</Text>
</View>

<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../../assets/images/offers.png')} style={{width:30,height:30, resizeMode:'contain', marginTop:15}}/>
    <Text style={{fontFamily:'Lato-Regular', fontSize: 13, color:color.white}}>Offers</Text>
</View>

<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source={require('../../assets/images/cart.png')} style={{width:30,height:30, resizeMode:'contain', marginTop:15}}/>
    <Text style={{fontFamily:'Lato-Regular', fontSize: 13, color:color.white}}>Cart</Text>
</View> */}