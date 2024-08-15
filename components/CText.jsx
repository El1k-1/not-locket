import { Text } from "react-native"
import BaseStyles from '../assets/styles/styles'

export default CText = (props) => {
    return (
        <Text style={{...BaseStyles.text}}>{props.children}</Text>
    )
}