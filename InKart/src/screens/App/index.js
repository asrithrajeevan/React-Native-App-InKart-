import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import SignUp from "../SignUp";
import LogInWithPhone from "../LogInWithPhone";
import LogInWithGoogle from "../LoginWithGoogle";

const AppStack = createNativeStackNavigator()
const App = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='SignUp' component={SignUp} />
                <AppStack.Screen name='LogInWithPhone' component={LogInWithPhone} />
                <AppStack.Screen name='LogInWithGoogle' component={LogInWithGoogle} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default App