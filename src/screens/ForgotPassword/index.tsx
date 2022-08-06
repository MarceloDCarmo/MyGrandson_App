import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function ForgotPassword() {

    const navigation = useNavigation()
    
    function navigateToLogin() {
        navigation.navigate('login')
    }

    return(
        <View style={styles.container}>
            <Text>
                Gabriel cabeça de nós todos
            </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={navigateToLogin}
            >
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}