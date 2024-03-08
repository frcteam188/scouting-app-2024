import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";

const DropdownComp = ({ options, updateTeamNumber, labelText }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: "Select an option...",
    value: null,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper}>{labelText} </Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => {
          setSelectedValue(value);
          updateTeamNumber(value);
        }}
        value={selectedValue}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    backgroundColor: "red",
    borderRadius: 10,
    margin: 10,
  },
  textWrapper: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 200,
    backgroundColor: "white",
  },
});

export default DropdownComp;
