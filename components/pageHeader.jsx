import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PageHeader = ({pageTitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.pageTitle}>{pageTitle}</Text>
    </View>
  );
}

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#24A8FC",
    paddingVertical: 20,
    paddingHorizontal: 5,
    color: "#f0f0f0",
    display: "flex",
    alignItems: "left",
    justifyContent: "center"
  },

  pageTitle: {
    fontSize: 20,
    color: "#ffffff",
  },
})
