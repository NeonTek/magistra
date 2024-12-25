import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native"

import PageHeader from "../../components/pageHeader";

const widgets = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader pageTitle="Active Schedules"/>
      <View style={styles.widgetsContainer}>
      {/* RETURN THE ABOVE VIEW ACCORDING TO THE DATA FROM THE KOTLIN BACKEND*/}
        <TouchableOpacity style={[styles.button, styles.btnMaroon]}>
          WhatsApp
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.btnBlue, styles.floatingBtn]} onPress={() => navigation.navigate("schedule-manager")}>+</TouchableOpacity>
    </SafeAreaView>
  );
};

export default widgets;

const styles = StyleSheet.create({
  button: {
    width: "48%",
    height: 100,
    borderRadius: 20,
    padding: 15,
    color: "#ffffff",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    textAlign: "center",
  },

  floatingBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 20,
    bottom: 20,
    right: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36,
    color: "#fff",
    elevation: 5,
  },

  bntOrange: {
    backgroundColor: "#EC481A",
  },

  btnGreen: {
    backgroundColor: "#2DA47C",
  },

  btnYellow: {
    backgroundColor: "#D69F38",
  },

  btnRed: {
    backgroundColor: "#A42D7C",
  },

  btnMaroon: {
    backgroundColor: "#130C20",
  },

  btnBlue: {
    backgroundColor: "#24A8FC",
  },

  container: {
    flex: 1,
  },

  widgetsContainer: {
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
}
)
