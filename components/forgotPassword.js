import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ForgotPassword = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "33%",
    marginTop: "5%",
    //backgroundColor: '#EEEAE2'
  },
  text: {
    color: "#0f0f1f", //'#686868',
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
