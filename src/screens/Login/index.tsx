import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {api, ApiResponse } from '../../api/api'
import { styles } from './styles'

export function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function apiLogin(username: string, password: string) {
        try {
            const { data } = await api.post<ApiResponse>("/login", {
                username,
                password
            })

            await AsyncStorage.setItem('accessToken', data.token)
            await AsyncStorage.setItem('tokenExpireTime', data.expires_in)

            Alert.alert("Token de acesso", "Seu token:\n" + await AsyncStorage.getItem('accessToken'))
        } catch (error) {
            Alert.alert("Ops! Ocorreu um erro")
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Nome
            </Text>
            <TextInput
                keyboardType='default'
                maxLength={30}
                style={styles.textInput}
                onChangeText={value => setUsername(value)}
            />
            <Text style={styles.label}>
                Senha
            </Text>
            <TextInput
                keyboardType='default'
                secureTextEntry={true}
                maxLength={50}
                style={styles.textInput}
                onChangeText={value => setPassword(value)}
            />
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