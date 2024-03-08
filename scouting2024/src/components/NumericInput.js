import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const NumericInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        style={styles.matchNumberinput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  matchNumberinput: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default NumericInput;
