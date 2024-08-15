import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Appearance, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/PostsScreen';
import { Navigation } from './screens/Navigation';
import baseStyles from './assets/styles/styles'

const getIsSignedIn = () => {
  return true;
}

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  console.log( colorScheme)
  return (
    <ThemeProvider>
      <Navigation></Navigation>
      <StatusBar style={baseStyles.appContainer} ></StatusBar>
    </ThemeProvider>
  )
}

