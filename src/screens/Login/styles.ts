import { Dimensions, StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        backgroundColor: '#FFF',
        width: 150,
        height: 150,
        borderRadius: 100,
        top: 30
    },
    content: {
        top: 80,
        height: '60%',
        width: '90%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 20,
        shadowColor: 'gray',
    },
    passwordInputContainer: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
    },
    visibilityIcon: {
        marginLeft: 10
    },
    label: {
        fontSize: 20,
        fontFamily: theme.FONTS.BOLD,
        marginBottom: 20,
    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '70%',
        marginVertical: 20,
        fontSize: 20,
        padding: 16,
        borderRadius: 20,
        fontFamily: theme.FONTS.REGULAR
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        marginVertical: 20,
        fontSize: 20,
        padding: 16,
        borderRadius: 20,
        fontFamily: theme.FONTS.REGULAR
    },
    button: {
        backgroundColor: theme.COLORS.PRIMARY_ORANGE,
        padding: 10,
        borderRadius: 20,
        width: '70%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonText: {
        fontSize: 20,
        color: theme.COLORS.TEXT_WHITE,
        fontFamily: theme.FONTS.BOLD
    }
})