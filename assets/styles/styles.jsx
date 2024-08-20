import { StyleSheet } from "react-native";
import { themeStatus } from "../../hooks/LocalStorage";
import GLOBAL from '../../assets/global'

export const colorPalette = {
    text: {
        primary: '#ffffff',
        secondary: '#777777',
        dangerous: '#FF2D00'
    },
    container: {
        base: '#222222',
        border: '#444444',
        focused: '#888888'
    },
    colors: {
        purple: '#8756a3'
    }
}

export default baseStyles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#111111'
    },
    viewCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})