import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Icon } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AppButton = ({ title, onPress, isPressed }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, isPressed && styles.pressedButton]}>
        <Text style={[styles.buttonText, isPressed && styles.pressedText]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const PlusButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCirclePlus}>
      <AntDesign name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
};

const MinusButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCircleMinus}>
      <AntDesign name="minus" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "red",
    paddingRight: 10,
    paddingLeft: 10,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  buttonCirclePlus: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "red",
    elevation: 3, // Shadow on Android
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCircleMinus: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "red",
    elevation: 3, // Shadow on Android
    justifyContent: "center",
    alignItems: "center",
  },
  pressedButton: {
    backgroundColor: "white",
  },
  pressedText: {
    color: "red",
  },
});

export { AppButton, PlusButton, MinusButton };
