import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HeaderCommonLeft from "../../components/CommonHeaderLeft";
import { useDimentionsContext } from "../../context";
import style from "./style";
import CommonBotton from "../../components/CommonBotton";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
navigator.geolocation = require('@react-native-community/geolocation')
import Geolocation from '@react-native-community/geolocation'; // for getting current location lat and lag
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import color from "../../components/common/colors";
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "react-native-snackbar";
import firestore  from "@react-native-firebase/firestore";
import { updateCartCount } from "../../storage/action";
import { check, PERMISSIONS, request, RESULTS, openSettings } from "react-native-permissions";

const AddAddress = () =>{
    const navigation = useNavigation()
    const dimensions = useDimentionsContext();
    const [getPosition, setNewPosition] = useState() 
    const [getAddress, setAddress] = useState('')
    const route = useRoute()
    const {cartItem, total, charges} = route.params
    const {firstName, lastName, email, mobilenumber, userId} = useSelector(state => state); // we can aceess the global state like this
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        checkLocationPermission();
        navigation.setOptions({
            headerLeft:()=> <HeaderCommonLeft type={'back'} />,
            headerTitleAlign:'left',
            headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
            }
        )
        
    }, [])
    console.warn('info--->',getPosition);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(info => {
            setNewPosition({
                latitude : info?.coords?.latitude?? 0,
                longitude : info?.coords?.longitude?? 0,
                latitudeDelta : 0.001,  // for setting the map marker
                longitudeDelta : 0.001,
            })
            Snackbar.show({
                text: 'Current location is fetched',
                backgroundColor : color.primaryGreen,
                duration: Snackbar.LENGTH_SHORT,
            });
        })

    }

    const checkLocationPermission = async () => {
        const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    
        if (result === RESULTS.BLOCKED) {
            // Guide the user to app settings
            Snackbar.show({
                text: 'Location access is blocked. Please enable it in app settings.',
                backgroundColor: color.primaryGreen,
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: 'OPEN SETTINGS',
                    textColor: 'white',
                    onPress: () => openSettings(),
                },
            });
        } else if (result !== RESULTS.GRANTED) {
            // Request permission
            const permissionResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            if (permissionResult !== RESULTS.GRANTED) {
                // Handle denied permission
            }
        }
    
        // Continue with getting the current location
        getCurrentLocation();
    };

    const handleCreateOrder = async paymentID =>{
        const orderId = paymentID.slice(4, 12) // making the payment id more brief for orderid
        await firestore().collection('Orders').add({
            orderId : String(orderId).toUpperCase(),
            created : Date.now(),
            updated : Date.now(),
            orderStatus : 'Ordered',
            totalAmount : String(total+charges),
            address : getAddress,
            userId : userId,
            paymentMethod : 'Online',
            cartItem : cartItem,
            userName : firstName+' '+lastName,
            userEmail : email,
            userPhone : mobilenumber,
            expectedDeliveryDate : ' ' // this field is for administration department.
        }).then(async resp => {
            await firestore().collection('Cart').where("userId","==",userId).get().then(querySnapshot=>{
                // console.warn('snapshot====>',snapshot.docs);
                querySnapshot.forEach(doc => {
                    doc.ref.delete().then(()=>{
                        setLoading(false)
                        dispatch(updateCartCount(0))
                        navigation.goBack()
                    }).catch(err=>{
                        console.warn('err1--->',err);
                    })
                })
                Snackbar.show({
                    text: 'Your Order Is Successfully Placed',
                    backgroundColor : color.primaryGreen,
                    duration: Snackbar.LENGTH_LONG,
                });
            })
        }).catch(err=>{
            console.warn('err2--->',err);
        })
        // setTimeout(() => {
        //     setLoading(false)
        //     console.warn('running - end > ',loading);
        //     navigation.goBack()
        // }, 5000);

    }
    const onButtonPress = () =>{
        var options = {
            description: 'Incart Product purchase',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_hxn7oIjrE82yGB', // Your razorpay api key
            amount: (total+charges).toString()+'00',
            name: 'Inkart',
            prefill: {
                email: email,
                contact: mobilenumber,
                name: `${firstName} ${lastName}`
            },
            theme: {color: color.primaryGreen}
        }
        RazorpayCheckout.open(options).then((data) => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        setLoading(true);
        handleCreateOrder(data.razorpay_payment_id);
        console.log('Success-->',data.razorpay_payment_id);
        }).catch((error) => { 
        // handle failure
        // alert(`Error: ${error.code} | ${error.description}`);
        console.log(`Error: ${error.code} | ${error.description}`);
        });    
        }

    return(
        <View style={responsiveStyle.container}>
            {/* model will display 10 second after sucessfull payment */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={loading}
                >
                <View style={{height:'100%', width:'100%', backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
                    <ActivityIndicator size={'large'} color={color.EmeraldGreen}/>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} keyboardShouldPersistTaps={'always'}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    currentLocation={true} // to fetching the current location details
                    fetchDetails={true}
                    currentLocationLabel="Current location"
                    onPress={(data, details ) => {
                        // 'details' is provided when fetchDetails = true
                        const location = data?.geometry?.location?? details?.geometry?.location  // if the location is not available in data we can get the geography data in the details also. for getting the lattitude and longitude
                        console.warn('location-->',data.description);
                        const positionData = {
                            latitude : location?.lat ?? 0, // if the location.lat is not existing we set 0 as default value
                            longitude : location?.lng ?? 0, 
                            latitudeDelta : 0.001,  // for setting the map marker
                            longitudeDelta : 0.001, // for setting the map marker
                        }
                        setNewPosition(positionData)
                        setAddress(data?.name?? data?.description)
                    }}
                    query={{
                        key: 'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
                        language: 'en',
                    }}
                    styles={{
                        textInput:responsiveStyle.textInput, 
                        predefinedPlacesDescription: responsiveStyle.description
                    }}
                    onFail={(err)=>console.warn('onFail--->',err)} // if the GooglePlacesAutocomplete is going to an error any way.
                    onNotFound={(err)=>console.warn('onNotFound',err)} // if the provided name of the place is not available.
                />
                {/* if the getPosition exist, shows the MapView */}
                {getPosition && ( 
                    <View style={responsiveStyle.mapViewContainer}>
                    <MapView
                        style={responsiveStyle.mapView}
                        initialRegion={getPosition}
                        region={getPosition}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        zoomEnabled={true}
                        pitchEnabled={true}
                        rotateEnabled={true}
                        scrollEnabled={true}
                        showsMyLocationButton={true}
                    > 
                    <Marker 
                        title={getAddress}
                        description="This is your marker"
                        coordinate={getPosition}
                    />
                    </MapView>
                </View>
                )}
                
                    
                    <TouchableOpacity onPress={checkLocationPermission} style={responsiveStyle.textView}>
                        <View style={responsiveStyle.locationIconView}>
                            <FontAwesome6 name="location-arrow" size={25} color={color.white} />
                        </View>
                        <Text style={responsiveStyle.currentLocationText}>Your current location</Text>
                    </TouchableOpacity>
                    
                <CommonBotton name={'Confirm location and proceed'} onButtonPress={onButtonPress}/>
            
            </ScrollView>
        </View>
    )
}

export default AddAddress