import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    visibilityIcon: {
        marginLeft: 15
    },
    label: {
        fontSize: 24
    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '70%',
        marginVertical: 20,
        fontSize: 24,
        padding: 10,
        borderRadius: 10
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        marginVertical: 20,
        fontSize: 24,
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#3a44d9',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }
})