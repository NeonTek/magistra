import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";

const Input = ({label}) => {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return(

    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.inputBox, {borderColor: isFocused ? "#1E004A" : "#324E78"}, {}]}
        placeholder={label}
        value={inputText}
        onFocus = {() => setIsFocused(true)}
        onBlur = {() => setIsFocused(false)}
        onChangeText={(text) => setInputText(text)}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    gap: 5,
  },

  inputBox: {
    height: 40,
    paddingHorizontal: 10,
    color: "#324E78",
    borderColor: "#324E78",
    borderRadius: 6,
    borderWidth: 1,
  }
})
