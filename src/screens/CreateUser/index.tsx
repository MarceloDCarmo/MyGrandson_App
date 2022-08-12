import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import api from '../../api/api'
import { styles } from './styles'

export function CreateUser() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    async function createUser(username: string, password: string) {

        try {
            const { data } = await api.post('/users', {
                username,
                password
            })

            Alert.alert('Alerta!', `Usuário ${username} criado com sucesso!`)
        } catch (error) {
            Alert.alert('Erro!', 'Não seja burro, faz direito!')
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
                onPress={() => createUser(username, password)}
            >
                <Text style={styles.buttonText}>
                    Criar Usuário
                </Text>
            </TouchableOpacity>
        </View>
    )
}