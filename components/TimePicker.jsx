import React, {useState} from "react";
import {View,Platform, Text} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import MButton from "./button"

const TimePicker = () => {

  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    if(event.type === "dismissed"){
      setShow(false);
      return;
    }
    setShow(false);
    setTime(selectedTime || time);
  };

  const showTimePicker = () => {
    setShow(true);
  };

  return (
    <View style={{flex: 1}}>
      <Text>Selected Time: {time.toLocaleTimeString()}</Text>
      <MButton text="Show Time Picker"
                onPress={showTimePicker}/> {show && (
                  <DateTimePicker
                        value={time}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}/>
                )}

        <Text> Showing: {show}</Text>
    </View>
  )
}

export default TimePicker;
