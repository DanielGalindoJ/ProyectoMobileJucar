import {View} from "react-native";
import {Badge} from "react-native-paper";// va servir para el listado de los pedidos
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {AuthScreen} from "../../screens/Auth/AuthScreen";
import {screensName} from "../../utils";
import {HomeStack, WishlistStack, CartStack, AccountStack} from "../stacks"
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import {styles} from "./TabNavigation.styles"

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarActiveTintColor: "#000",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
    })}>
        <Tab.Screen 
            name={screensName.home.root} 
            component={HomeStack} 
            options={{title: "Inicio"}} 
        />
       
       
        <Tab.Screen 
            name={screensName.account.root} 
            component={AccountStack} 
            options={{title: "Mi cuenta"}} 
        />
    </Tab.Navigator>
  )
}

function setIcon(route, routeStatus) {
    const totalProduct = 1;
    let iconName = "";
    let color = "#FFF";

    //console.log(routeStatus);
    if (routeStatus.focused){
        color = "#0098d3";
    }

    //console.log(route);
    if (route.name === screensName.home.root){
        iconName = "home";
    }
    if (route.name === screensName.wishlist.root){
        iconName = "heart";
    }
    // if (route.name === screensName.cart.root){
    //     return (
    //         <View>
    //             <AwesomeIcon name="shopping-cart" color={color} style={styles.icon}/>
    //             {totalProduct > 0 && <Badge style={styles.totalCart}>{totalProduct}</Badge>}
    //         </View>
    //     );
        
    // }
    if (route.name === screensName.account.root){
        iconName = "user";
    }

    return <AwesomeIcon name={iconName} color={color} style={styles.icon}/>;
}