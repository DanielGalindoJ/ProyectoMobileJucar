import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home/HomeScreen";
import  ProductScreen  from "../../screens/Home/ProductScreen";
import  SearchScreen  from "../../screens/Home/SearchScreen";
import screensName from "../../utils";

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