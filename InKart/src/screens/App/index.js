import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";

const AppStack = createNativeStackNavigator()
const App = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Login' component={Login} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default App