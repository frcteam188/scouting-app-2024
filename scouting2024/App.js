import { StyleSheet, View } from "react-native";
import Scouting from "./src/screens/Scouting";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  Image,
} from "@expo/vector-icons";
import SubmitQR from "./src/screens/SubmitQR";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
          },
        }}
      >
        <Tab.Screen
          name={"Scouting"}
          component={Scouting}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={"home"}
                size={25}
                color={focused ? "red" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"Submit"}
          component={SubmitQR}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"car-wireless"}
                size={25}
                color={focused ? "red" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
