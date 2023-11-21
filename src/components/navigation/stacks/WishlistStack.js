import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {WishlistScreen} from '../../screens/wishlist'
import { screensName } from "../../../utils";

const stack = createNativeStackNavigator();

export function wishlistScreen(){
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name={screensName.wishlist.wishlist} component={wishlistScreen}></stack.Screen>
        </stack.Navigator>
    )
}