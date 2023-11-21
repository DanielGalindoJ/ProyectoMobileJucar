import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./TabNavigation/TabNavigation";
import { screensName } from "../../utils";

const stack = createNativeStackNavigation ()

export function AppNavigation(){
    return(
       <NavigationContainer>
        <stack.Navigator screenOptions ={{headerShown:false}}>
            <stack.Screen>
                name = 'tab'
                component = {TabNavigation}
            </stack.Screen>
        </stack.Navigator>
       </NavigationContainer>
    )
}