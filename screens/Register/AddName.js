import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import { useState } from "react";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";

import AppTextInput from "../../components/TextInput";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const AddName = ({ onTextChange }) => {
  const [fullName, setFullName] = useState("");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <View
      style={{
        marginVertical: Spacing * 3,
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          color: Colors.darkText,
          textAlign: "center",
          fontSize: FontSize.xLarge,
        }}
      >
        What is your name?
      </Text>
      <AppTextInput
        onChangeText={(text) => {
          onTextChange(text);
        }}
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        placeholder="Full Name"
        name="fullName"
      />
    </View>
  );
};

export default AddName;

const styles = StyleSheet.create({});
