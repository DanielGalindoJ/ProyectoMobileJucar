import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {CartScreen} from "../../screens/Cart";
import {screensName} from "../../utils";

const stack = createNativeStackNavigator();

export function CartStack() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name = {screensName.cart.cart} component={CartScreen}/>
    </stack.Navigator>
  )
}