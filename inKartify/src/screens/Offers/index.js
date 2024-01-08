import React, { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import CostomeSearch from "../../components/CostomeSearchBox";
import style from "./style";
import { useDimentionsContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";

const Offers = () => {
     const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({headerLeft: ()=> <HeaderCommonLeft />,
        headerTitleAlign:'left',
        headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}},)
    })
    const offersArray = [
        {   
            offer : '41',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.500',
            code : 'pw332'
        },
        {   
            offer : '42',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.2000',
            code : 'rew324'
        },
        {   
            offer : '50',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.1100',
            code : 'sfd345'

        },
        {   
            offer : '11',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.2500',
            code : 'wer324'

        },
        {   
            offer : '45',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.500',
            code : 'dsf123'

        },
        {   
            offer : '23',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.300',
            code : 'wer345'

        },
        {   
            offer : '43',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.1900',
            code : 'qrr534'

        }
    ]

    return(
        <View style={style.main}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
            <CostomeSearch />
            <FlatList 
            data={offersArray}
            keyExtractor={(item,index)=> String(index)}
            renderItem={({item, index})=>{
                return(
                    <View>
                        <View style={responsiveStyle.offerTicketContainerView}>
                            <View style={responsiveStyle.offersTicketView}>
                                <View style={responsiveStyle.ticketRoundLeftView}> 
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                </View>
                                    
                                <View style={responsiveStyle.ticketContainer}>
                                    <View style={responsiveStyle.ticketContentView}>
                                        <View>
                                            <Text style={responsiveStyle.ticketOfferText}>{item.offer}</Text>
                                        </View>
                                        <View style={{marginHorizontal:5}}>
                                            <Text style={responsiveStyle.percentage}>%</Text>
                                            <Text style={responsiveStyle.offText}>OFF</Text>
                                        </View>
                                        <View style>
                                            <Text style={responsiveStyle.headText}>{item.head}</Text>
                                            <Text style={responsiveStyle.contentText}>{item.content}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={responsiveStyle.ticketMiddleRoundView}>
                                    <View style={responsiveStyle.ticketMiddleUpperRound}></View>
                                    <View style={responsiveStyle.ticketMiddleBottomRound}></View>
                                </View>
                                <View style={responsiveStyle.ticketRightContainer}>
                                    <View style={responsiveStyle.ticketRightContent}>
                                        <Text style={responsiveStyle.useCodeText}>Use Code</Text>
                                        <View style={responsiveStyle.codeView}>
                                            <Text style={responsiveStyle.itemCode}>{item.code}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={responsiveStyle.responsiveStyle}>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                    <View style={responsiveStyle.ticketRoundStyles}></View>
                                </View> 
                            </View>
                        </View>
                    </View>
                )
            }}
            />
        </ScrollView>
    </View>
    )
}

export default Offers