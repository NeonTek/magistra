// This is a component that represent each app(item) in the App list FlatList

import React, {useState} from  "react";
import {StyleSheet, View, Text, Switch, TouchableOpacity} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const AppItem = ({appName}) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{appName}</Text>
      </View>

      <View style={styles.containerInner}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="time" color="#24A8FC" size={24}/>
        </TouchableOpacity>
        <Switch
          thumbColor={isEnabled ? "#24A8FC" : "#859FC8"}
          trackColor={{ false: "#324E78", true: "#f0f0f0"}}
          // ios_backgroundColor: "#859FC8"
          onValueChange={toggleSwitch}
          value={isEnabled}/>
      </View>
    </View>
  )
}

export default AppItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C2CFE3",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  containerInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  text: {
    color: "#24A8FC",
    fontSize: 18,
    display: "inline-block",
  },

  button: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

})
