import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

const PageHeader = ({pageTitle, navigation}) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white"/>
      </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    gap: 10,
  },

  pageTitle: {
    fontSize: 20,
    color: "#ffffff",
  },
})
