import React from "react";
import {View,StyleSheet, Text, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {useNavigation} from "@react-navigation/native";

import PageHeader from "../components/buttonedPageHeader"
import AppItem from "../components/app-item"

const AppList = () => {

  const apps = [
    {id: 1, name: "WhatsApp"},
    {id: 2, name: "Facebook"},
    {id: 3, name: "Instagram"},
    {id: 4, name: "Daily.dev"},
    {id: 5, name: "WhatsApp"},
    {id: 6, name: "Facebook"},
    {id: 7, name: "Instagram"},
    {id: 8, name: "Daily.dev"},
    {id: 9, name: "WhatsApp"},
    {id: 10, name: "Facebook"},
    {id: 11, name: "Instagram"},
    {id: 12, name: "Daily.dev"},
  ]

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader pageTitle="App List" navigation={navigation}/>
      <View style={styles.container}>

        <FlatList
          data={apps}
          keyExtracter={(item) => item.id.toString()}
          renderItem={({item}) => (
            <AppItem appName={item.name}/>
          )}

        />
      </View>
    </SafeAreaView>
  )
}

export default AppList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
