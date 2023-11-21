import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeScreen, ProductScreen, SearchScreen} from '../../screens/Home'
import {screensName} from '../../utils'

const stack = createNativeStackNavigator();

export function HomeStack (){
    return ( 
        <stack.Navigator>
            <stack.Screen name= {screensName.home.home} component={HomeScreen}></stack.Screen>
            <stack.Screen name= {screensName.home.product} component={ProductScreen}></stack.Screen>
            <stack.Screen name= {screensName.home.home} component={SearchScreen}></stack.Screen>
        </stack.Navigator>
    )
}