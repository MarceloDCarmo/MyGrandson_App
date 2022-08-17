import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import theme from '../theme'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}