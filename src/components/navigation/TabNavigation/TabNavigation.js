import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthScreen} from '../../screens/Auth/AuthScreen'

const Tab = createBottomTabNavigator();

export function TabNavigation(){
    return (
        
        <TabNavigation>
            <Tab.Screen>
            name = "home"
            component ={AuthScreen}
            options ={{title : 'Inicio'}}
        </Tab.Screen>

        // Tercer Menu ? Que poner 
        {/* <Tab.Screen>
            name = "home"
            component ={AuthScreen}
            options ={{title : 'Inicio'}}
         </Tab.Screen> */}

        <Tab.Screen>
            name = "account"
            component ={AuthScreen}
            options ={{title : 'Cuenta'}}
          </Tab.Screen>
        </TabNavigation>
    )
}