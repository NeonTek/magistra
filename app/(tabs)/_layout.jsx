import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
//import { Icon } from "react-native";

// ICONS
import Ionicons from "react-native-vector-icons/Ionicons";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name === "index"){
            iconName = focused ? "list" : "list-outline";
          }else if(route.name === "quick-actions"){
            iconName = focused ? "flash" : "flash-outline";
          }else if(route.name === "widgets"){
            iconName = focused ? "calendar" : "calendar-outline";
          }

          return <Ionicons name={iconName} size={size} color={color}/>;
        },

        tabBarActiveTintColor: "#24A8FC",
        tabBarInactiveTintColor: "#130C20",
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
        //  tabBarIcon: Icons.iconWidget,
          title: "Logs",
        }}
      />
      <Tabs.Screen
        name="quick-actions"
        options={{
          // tabBarIcon: Icon.iconAction,
          title: "Quick Actions",
        }}
      />

      <Tabs.Screen
        name="widgets"
        options={{
          // tabBarIcon: Icon.iconWidget,
          title: "Widgets",
        }}
      />
    </Tabs>
  );
}
