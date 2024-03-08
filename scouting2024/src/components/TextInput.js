import React from "react";
import { PaperProvider, TextInput, DefaultTheme } from "react-native-paper";

const TextComponent = ({ value, onChangeText, label }) => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "red", // Change primary color
    },
  };
  return (
    <PaperProvider theme={customTheme}>
      <TextInput label={label} value={value} onChangeText={onChangeText} />
    </PaperProvider>
  );
};

export default TextComponent;
