import { AuthScreen } from "../screens/Auth/AuthScreen";
import {AppNavigation} from "./AppNavigation";

export function RootNavigation() {
    const user = "Jucar ";

  return user ? <AppNavigation/> : <AuthScreen />;
}