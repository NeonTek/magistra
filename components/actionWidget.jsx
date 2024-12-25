import { StyleSheet, Text, View } from "react-native";
import React from "react";

const actionWidget = (text, color) => {
  return (
    <TouchableOpacity style={styles.actionWidget}>
      <Text>`{text}`</Text>
    </TouchableOpacity>
  );
};

export default actionWidget;

const styles = StyleSheet.create({
  actionWidget: {
    padding: "25px",
    backgroundColor: "gray",
    borderRadius: "12px",
  },
});
