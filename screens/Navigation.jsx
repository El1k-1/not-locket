import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsScreen from "./PostsScreen";
import ChatScreen from "./ChatScreen";
import ProfileScreen from "./ProfileScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import baseStyles from "../assets/styles/styles";

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  return false;
};

export const Navigation = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            ...baseStyles.appContainer,
            ...baseStyles.viewCenter,
          },
          gestureDirection:'horizontal',
          gestureEnabled: true
        }}
      >
        {isSignedIn ? (
          <>
            <Stack.Screen name="Posts" component={PostsScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
