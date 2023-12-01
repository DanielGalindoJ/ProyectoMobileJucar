import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen, ProductScreen, SearchScreen} from "../../screens/Home";
import {screensName} from "../../utils";

const stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name={screensName.home.home} component={HomeScreen} />
        <stack.Screen name={screensName.home.product} component={ProductScreen} />
        <stack.Screen name={screensName.home.search} component={SearchScreen} />
    </stack.Navigator>
  )
}