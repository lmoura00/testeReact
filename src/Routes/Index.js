import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../Pages/Login'

export function Routes(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Login' component={Login} options={{headerShown:false, statusBarColor:'#0182F7'}}/>
            </Navigator>
        </NavigationContainer>
    )
}