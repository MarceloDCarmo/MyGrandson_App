import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateUser } from '../screens/CreateUser'
import { ForgotPassword } from '../screens/ForgotPassword'
import { Login } from '../screens/Login'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            
            <Screen
                name='createUser'
                component={CreateUser}
                options={{
                    title: 'Novo Usuário',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ee6d08',
                    },
                    headerTintColor: '#ebebeb'
                }}
            />
            <Screen
                name='forgotPassword'
                component={ForgotPassword}
                options={{
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ee6d08',
                    },
                    headerTintColor: '#ebebeb'
                }}
            />
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