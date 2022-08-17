import { Dimensions, StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})