import React from "react";
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {useNavigation} from "@react-navigation/native";

import PageHeader from "../components/buttonedPageHeader";
import Input from "../components/text-input";
import MButton from "../components/button";

const ScheduleManager = () => {

  const navigation = useNavigation();

  const handleAddSchedule = () => {
    // ADD SCHEDULE FUNCTIONALITY HERE
    console.log("Pressed!")
  }


  return (
    <SafeAreaView>
      <PageHeader pageTitle="Manage Schedule" navigation={navigation}/>

      <View>
      {/*Custom inputs accepts a label:string which is the text on it and the placeholder*/ }
        <Input label="Schedule Name"/>

        {/* The custom button accepts the text(Button text(string)) and onPress event handler*/}
        <MButton
          text="Add Schedule"
          onPress={() => handleAddSchedule()}/> {/*Implement this method(handleAddSchedule()) above*/}
      </View>
    </SafeAreaView>
  )
}

export default ScheduleManager;

const styles = StyleSheet.create({

})
