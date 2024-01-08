import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useDimentionsContext } from "../../context";
import style from "./style";
import OrderDetails from "./Component";
import CommonBotton from "../../components/CommonBotton";

const Cart = () => {
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)
    const newProducts = {
            id : 0,
            name : 'Shoes',
            content : 'High quality shoes',
            price : 1500,
            image : require('../../assets/images/shoes.png'),
            off : '50%',
        }  
    
    const offersTickets = {   
            offer : '41',
            head : 'Midnight Sale Offer',
            content : 'On all Orders above Rs.500',
            code : 'pw332',
        }
    return(
        <View style={responsiveStyle.container}>
            <View style={responsiveStyle.flatListContainer}>
                <Image source={newProducts.image} style={responsiveStyle.itemImages}/>
                <View style={responsiveStyle.itemContentView}>
                    <Text numberOfLines={1} style={responsiveStyle.itemName}>{newProducts.name}</Text>
                    <Text numberOfLines={2} style={responsiveStyle.itemContent}>{newProducts.content}</Text>
                    <View style={responsiveStyle.priceOffQntyView}>
                        <View style={responsiveStyle.priceOffView}>
                            <Text numberOfLines={1} style={responsiveStyle.itemPrice}>₹ {newProducts.price}</Text>
                            <View style={responsiveStyle.offView}>                 
                                <Text numberOfLines={1} style={responsiveStyle.itemOff}>{newProducts.off}</Text>                         
                            </View>
                        </View>
                        <View style={responsiveStyle.qntView}>
                            <Text style={responsiveStyle.QntyText1}>-</Text>
                            <Text style={responsiveStyle.QntyText2}>0</Text>
                            <Text style={responsiveStyle.QntyText1}>+</Text>
                        </View>
                    </View>
                </View>             
            </View>


            {/* Offer ticket */}

            
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
                                    <Text style={responsiveStyle.ticketOfferText}>{offersTickets.offer}</Text>
                                </View>
                                <View style={{marginHorizontal:5}}>
                                    <Text style={responsiveStyle.percentage}>%</Text>
                                    <Text style={responsiveStyle.offText}>OFF</Text>
                                </View>
                                <View style>
                                    <Text style={responsiveStyle.headText}>{offersTickets.head}</Text>
                                    <Text style={responsiveStyle.contentText}>{offersTickets.content}</Text>
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
                                    <Text style={responsiveStyle.itemCode}>{offersTickets.code}</Text>
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

            <OrderDetails />

            <CommonBotton name={"Proceed to Checkout"}/>

        </View>
    )
}

export default Cart