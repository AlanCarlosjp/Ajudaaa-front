import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleHeaderHome, StyleHeaderLogin } from "../componentes/Headers";
import BemVindo from "./BemVindo";
import Home from "./Home";
import Register from "./Register";

export type RouteType = {
    Login: undefined,
    Cadastro: undefined,
    BemVindo: undefined,
    Home: undefined
}

const Stack = createNativeStackNavigator<RouteType>();



const Routes = () => {
    return(
        <Stack.Navigator initialRouteName="BemVindo" screenOptions={{animation: 'fade_from_bottom'}}>
            <Stack.Screen name="Cadastro" component={Register} options={StyleHeaderLogin}/>
            <Stack.Screen name="BemVindo" component={BemVindo} options={StyleHeaderHome}/>
            <Stack.Screen name="Home" component={Home} options={StyleHeaderHome}/>
        </Stack.Navigator>
    )
}


export default Routes;