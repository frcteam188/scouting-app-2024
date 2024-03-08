import React from "react";
import { Switch } from "react-native-paper";

const SwitchComponent = ({ value, onValueChange }) => {
  return <Switch value={value} onValueChange={onValueChange} color="red" />;
};

export default SwitchComponent;
