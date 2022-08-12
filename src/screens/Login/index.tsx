import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import api from '../../api/api'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

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
        if(passVisibility.button == 'visibility-off'){
            setPassVisibility({ button: 'visibility', input: false})
        } else {
            setPassVisibility({ button: 'visibility-off', input: true})
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Nome
            </Text>
            <TextInput
                keyboardType='default'
                maxLength={50}
                style={styles.nameInput}
                onChangeText={value => setUsername(value)}
            />
            <Text style={styles.label}>
                Senha
            </Text>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    keyboardType='default'
                    secureTextEntry={passVisibility.input}
                    maxLength={50}
                    style={styles.passwordInput}
                    onChangeText={value => setPassword(value)}
                />
                <MaterialIcons 
                    name={passVisibility.button as MaterialIconName}
                    size={ 30 }
                    color='#3a44d9'
                    style={styles.visibilityIcon}
                    onPress={changePassVisibility}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => apiLogin(username, password)}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}