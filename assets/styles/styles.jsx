import { StyleSheet } from "react-native";
import { themeStatus } from "../../hooks/LocalStorage";
import { themeColor } from "../../hooks/ColorTheme"

export default baseStyles = StyleSheet.create({
    text: {
        color: (!themeColor) ? 'white': 'black',
        font: require('../fonts/Roboto-Regular.ttf')
    },
    appContainer: {
        backgroundColor: (themeColor) ? 'white': 'black'
    },
    viewCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})