import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import SignUp from "../SignUp";
import LogInWithPhone from "../LogInWithPhone";
import LogInWithGoogle from "../LoginWithGoogle";
import Home from "../Home.js";
import DimentionsContextProvider from "../../context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomeDrawer from '../../components/CustomeDrawer';
import CustomFooter from '../../components/CustomeFooter';
import Search from '../Search';
import Offers from '../Offers';
import Cart from '../Cart';
import Category from '../Category';
import Orders from '../Oreder';
import Wishlist from '../Wishlist';
import Account from '../Account';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../storage/store';
import SplashScreen from '../Splash';
import Shop from '../Shop';

const Drawer = createDrawerNavigator()
const AppStack = createNativeStackNavigator()
const Footer = createBottomTabNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={ ()=><CustomeDrawer />}>
      <Drawer.Screen name="AppFooter" component={AppFooter} options={{headerShown:false}}/>
      <Drawer.Screen name="Category" component={Category}/>
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Shop" component={Shop} />

    </Drawer.Navigator>
  );
}

function AppFooter() {
  return (
    <Footer.Navigator tabBar={props=><CustomFooter {...props}/>} 
      // screenOptions={{headerLeft:()=>{
      //   return (
      //   <TouchableOpacity style={{paddingLeft:10}} onPress={()=>navigation.goBack()}>
      //     <Image source={require('../../assets/images/leftArrow.png')} style={{width:25, height:25}}/>
      //   </TouchableOpacity>)
      // },
      // headerTitleAlign:'left',
      // headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
      // }}
      >
        <Footer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Footer.Screen name="Category" component={Category} 
          // options={{headerLeft:()=>{
          //   return (
          //   <TouchableOpacity style={{paddingLeft:10}} onPress={()=>navigation.goBack()}>
          //     <Image source={require('../../assets/images/leftArrow.png')} style={{width:25, height:25}}/>
          //   </TouchableOpacity>)
          // },
          // headerTitleAlign:'left',
          // headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:20}
          // }}
        />
        <Footer.Screen name="Search" component={Search}/>
        <Footer.Screen name="Offers" component={Offers}/>
        <Footer.Screen name="Cart" component={Cart}/>
    </Footer.Navigator>
  );
}

const AppNavigation = () => {
  const {isLoged} = useSelector(state => state); // we can aceess the global state like this
  console.warn('isLoged-->>',isLoged)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    console.log("is first");
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[isLoged])

    return(
      // DimentionsContextProvider is a context provider now the value gloabally settled
      <DimentionsContextProvider>
          <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
              { loading ? (<AppStack.Screen name='Splash' component={SplashScreen} />)
              :(
                <>
                { isLoged ?(<AppStack.Screen name="AppDrawer" component={AppDrawer} />) : // if the is loged is equal to true we have ontly this stack else the following stack
                  (<>
                    <AppStack.Screen name='Login' component={Login} />
                    <AppStack.Screen name='SignUp' component={SignUp} />
                    <AppStack.Screen name='LogInWithPhone' component={LogInWithPhone} />
                    <AppStack.Screen name='LogInWithGoogle' component={LogInWithGoogle} />
                  </>)
                }
                </>
              )
            }
            </AppStack.Navigator>
          </NavigationContainer>
      </DimentionsContextProvider>
    )
}

const App = () =>{
  return(
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App