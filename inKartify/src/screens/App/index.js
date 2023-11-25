import React, { useContext } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import SignUp from "../SignUp";
import LogInWithPhone from "../LogInWithPhone";
import LogInWithGoogle from "../LoginWithGoogle";
import Home from "../Home.js";
import DimentionsContextProvider from "../../context";

const AppStack = createNativeStackNavigator()
const App = () => {
    return(
        // DimentionsContextProvider is a context provider.
        <DimentionsContextProvider> 
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{headerShown:false}}>
                    <AppStack.Screen name='Login' component={Login} />
                    <AppStack.Screen name='SignUp' component={SignUp} />
                    <AppStack.Screen name='LogInWithPhone' component={LogInWithPhone} />
                    <AppStack.Screen name='LogInWithGoogle' component={LogInWithGoogle} />
                    <AppStack.Screen name="Home" component={Home} />
                </AppStack.Navigator>
            </NavigationContainer>
        </DimentionsContextProvider>
    )
}

export default App