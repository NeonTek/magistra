import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import PageHeader  from "../../components/pageHeader";
import notifications from "../test-data/NotificationModel";

const index = () => {
  const NotificationItem = ({title, type, message, timestamp}) => {
    <View style={styles.notification}>
      <Text style={styles.notificationText}>
        {message}
      </Text>
      <View style={styles.notificationMeta}>
        <Text style={styles.meta}>{type}</Text>
        <Text style={styles.meta}>{timestamp}</Text>
      </View>
    </View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader pageTitle="Notification Logs"/>

      <FlatList
        data={notifications}
        keyExtracter={(item) => item.id.toString()}
        renderItem={({item}) => (
          <NotificationItem
            title={item.title}
            message={item.message}
            type={item.type}
            timestamp={item.timestamp}
          />
        )}

      />
      <StatusBar barStyle={"light-content"} backgroundColor="#4870AD" />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  meta: {
    color: "#f4f4f4",
    fontSize: 10,
  },

  notificationMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationText: {
    color: "#f0f0f0",
    fontSize: 18,
  },

  notification: {
    padding: 10,
    margin: 5,
    backgroundColor: "#859FC8",
    borderRadius: 20,
  },

  pageTitle: {
    backgroundColor: "#304B73",
    color: "#f0f0f0",
    padding: 5,
    fontSize: 20,
  },

  container: {
      backgroundColor: "#304b73",
  },
});
