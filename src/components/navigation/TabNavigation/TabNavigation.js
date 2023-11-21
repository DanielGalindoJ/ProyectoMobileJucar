import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthScreen} from '../../screens/Auth/AuthScreen'
import { screensName } from "../../../utils";
import { HomeStack, wishlistScreen } from "../stacks";


const Tab = createBottomTabNavigator();

export function TabNavigation(){
    return (
        
        <TabNavigation>
            <Tab.Screen>
            name = {screensName.home.root}
            component ={HomeStack}
            options ={{title : 'Inicio'}}
        </Tab.Screen>

        
        <Tab.Screen>
            name = {screensName.wishlist.root}
            component ={AuthScreen}
            options ={{title : 'list {deseos'}}
         </Tab.Screen> 

        <Tab.Screen>
            name = {screensName.account.root}
            component ={AuthScreen}
            options ={{title : ' My Cuenta'}}
        </Tab.Screen>
        </TabNavigation>
    )
}