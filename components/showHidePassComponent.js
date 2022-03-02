import React, { useState } from "react";
import {  } from "react-native-paper";
import eye from './../assets/eye-solid.svg';
import eyeslash from './../assets/eye-slash-solid.svg';
import {TextInput, View, StyleSheet, Image} from "react-native";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

export default function ShowHidePassword() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  


  return (
    <View style={styles.container}>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder="Enter Password"
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    //height : 40,
    width: "80%",
    backgroundColor: '#f4f5eb',
    borderRadius : 10,
    borderWidth : 1,
    marginTop: '10%',
    paddingHorizontal: 10,
  },
  input : {

  }
})