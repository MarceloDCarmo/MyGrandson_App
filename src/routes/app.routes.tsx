import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='login'
                component={Login}
                options={{
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ee6d08',
                    },
                    headerTintColor: '#ebebeb'
                }}
            />
        </Navigator>
    )
}