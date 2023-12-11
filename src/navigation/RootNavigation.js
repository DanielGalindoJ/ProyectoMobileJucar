import { AuthScreen } from "../navigation/stacks/AccountStack";
import {AppNavigation} from "./AppNavigation";

export function RootNavigation() {
    const user = "Jucar ";

  return user ? <AppNavigation/> : <AuthScreen />;
}