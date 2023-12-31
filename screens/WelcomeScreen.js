import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const { height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Image
            animation="bounceIn"
            duraton="1500"
            source={require("../assets/images/logo2.png")}
            style={styles.logo}
            resizeMode="center"
          />
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.green,
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
            }}
          >
            Join Lingo Learn
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              fontFamily: "Poppins_400Regular",
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            Create a profile now so you can start learning and save progress.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 4,
            // flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              backgroundColor: Colors.green,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              //width: "48%",
              borderRadius: 50,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              backgroundColor: Colors.grey,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              // Add marginTop for vertical space
              marginTop: Spacing,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: Colors.text,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
