import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { laranjaBase, azulColor } from '../../global';



const StyleHeader: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: '#0E1428' },
    headerTitleStyle: { color: laranjaBase },
    headerTintColor: '#D95D39',
    headerTitleAlign: 'center',
}

const StyleHeaderLogin: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: '#0E1428' },
    headerTitleStyle: { color: laranjaBase },
    headerTintColor: '#D95D39',
    headerTitleAlign: 'center',
}

const StyleHeaderHome: NativeStackNavigationOptions = {
   headerShown: false
}

const headerInicio: BottomTabNavigationOptions = {
    headerShown:false
}


export { StyleHeader, StyleHeaderLogin, StyleHeaderHome, headerInicio }