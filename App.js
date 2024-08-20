import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Appearance, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/PostsScreen';
import { Navigation } from './screens/Navigation';
import baseStyles from './assets/styles/styles'
import React from 'react';
import GLOBAL from './assets/global'
import SystemNavigationBar from 'react-native-system-navigation-bar';

const getIsSignedIn = () => {
  return true;
}

export default function App() {

  const [themeColor, setThemeColor] = React.useState('light')

  React.useEffect(() => {
    setThemeColor(Appearance.getColorScheme())
    GLOBAL.themeColor = Appearance.getColorScheme();
  })
  
  return (
    <ThemeProvider>
      <Navigation></Navigation>
      <StatusBar style="light" ></StatusBar>
    </ThemeProvider>
  )
}

