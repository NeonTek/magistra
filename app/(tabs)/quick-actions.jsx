import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import PageHeader from "../../components/pageHeader";

const quickActions = () => {
  return (
    <SafeAreaView>

    <PageHeader pageTitle='Quick Actions'/>

      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.btnBlue]}>
          Do not Disturb
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnMaroon]}>
          Toggle Manager
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnRed]}>
          Snooze Notifications
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnYellow]}>
          Add/Edit Schedules
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnGreen]}>
          Theme Switcher
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.bntOrange]}>
          Notifications Profiles
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnGreen]}>
          Mute/Unmute some apps
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnMaroon]}>
          Toggle Manager
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default quickActions;

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
    padding: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
