import React, {useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const MButton = ({text, onPress}) => {
  return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      </View>
  )
}

export default MButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#24A8FC",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  text: {
    color: "#f0f0f0",
  },

  container: {
    padding: 10,
  },
})
