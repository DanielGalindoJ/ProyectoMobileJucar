import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TabNavigation} from "../navigation/TabNavigation/TabNavigation"
import {screensName} from "../utils/screensName"

const stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen
          name={screensName.tab}
          component={TabNavigation}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}