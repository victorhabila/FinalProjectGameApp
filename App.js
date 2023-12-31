import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import SplashScreen from "./screens/SplashScreen";
import AddName from "./screens/Register/AddName";
import AddEmail from "./screens/Register/AddEmail";
import AddAge from "./screens/Register/AddAge";
import AddPassword from "./screens/Register/AddPassword";
import store from "./redux/store";
import { Provider } from "react-redux";
import SuccessScreen from "./screens/SuccessScreen";
import WelcomeLogin from "./screens/WelcomeLogin";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Settings from "./screens/Navigation/Settings";
import RateApp from "./screens/Navigation/RateApp";
import Profile from "./screens/Navigation/Profile";
import Quiz from "./screens/Navigation/Quiz";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="Settings" component={Settings} />*/}

          <Stack.Screen name="Quiz" component={Quiz} />

          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
          <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} />
          <Stack.Screen name="AddName" component={AddName} />
          <Stack.Screen name="AddAge" component={AddAge} />
          <Stack.Screen name="AddEmail" component={AddEmail} />
          <Stack.Screen name="AddPassword" component={AddPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {},
});
