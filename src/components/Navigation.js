import React, { useContext } from "react";
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo} = useContext(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.access_token ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
                    </>
                )}  
            </Stack.Navigator>
        </NavigationContainer>
    )
   
}

export default Navigation