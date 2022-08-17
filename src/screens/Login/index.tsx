import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import api from '../../api/api'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { Background } from '../../components/Background'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../theme'

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name']

export function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passVisibility, setPassVisibility] = useState({ button: 'visibility-off', input: true })

    async function apiLogin(username: string, password: string) {
        try {
            const { data } = await api.post("/login", {
                username,
                password
            })

            await AsyncStorage.setItem('accessToken', data.token)
            await AsyncStorage.setItem('tokenExpireTime', data.expires_in)

            Alert.alert("Token de acesso", "Seu token:\n" + await AsyncStorage.getItem('accessToken'))
        } catch (error) {
            Alert.alert("Ops! Ocorreu um erro")
            console.log(error)
        }
    }

    function changePassVisibility() {
        if (passVisibility.button == 'visibility-off') {
            setPassVisibility({ button: 'visibility', input: false })
        } else {
            setPassVisibility({ button: 'visibility-off', input: true })
        }
    }

    return (
        <Background>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient
                    style={styles.container}
                    colors={[theme.COLORS.PRIMARY_BLUE, 'transparent']}
                    locations={[0.7, 0.7]}
                >

                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.content}>
                        <Text style={styles.label}>
                            Entre com seu nome e senha
                        </Text>
                        <TextInput
                            keyboardType='default'
                            maxLength={50}
                            style={styles.nameInput}
                            onChangeText={value => setUsername(value)}
                            placeholder='Nome...'
                        />
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                keyboardType='default'
                                secureTextEntry={passVisibility.input}
                                maxLength={50}
                                style={styles.passwordInput}
                                onChangeText={value => setPassword(value)}
                                placeholder='Senha...'
                            />
                            <MaterialIcons
                                name={passVisibility.button as MaterialIconName}
                                size={30}
                                color={theme.COLORS.PRIMARY_BLUE}
                                style={styles.visibilityIcon}
                                onPress={changePassVisibility}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => apiLogin(username, password)}
                        >
                            <Text style={styles.buttonText}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback >
        </Background >
    )
}