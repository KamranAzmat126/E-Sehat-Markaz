import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomeInput from "../components/customTextInput";
import CustomButton from "../components/Button";
import adminCredentials from "../adminCredentials.json";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../services/firebase";

export default function ForgotPasswordScreen({ navigation }) {
  //const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const onPressSubmit = (email) => {
    if (email === adminCredentials.email) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => alert(`A Password Reset Link has been sent to ${email}`))
        .catch(() => alert("Error Occured"));
      navigation.navigate("AdminLogin");
    } else {
      return alert("Email is not correct!");
    }
  };

  function onPressBackToLogin() {
    navigation.navigate("AdminLogin");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resetHeading}>Reset Password</Text>

      <CustomeInput
        placeholder="Enter email"
        value={email}
        setValue={setEmail}
      />
      <Text style={styles.text}>You will receive a reset password link</Text>
      <CustomButton text={"Submit"} onPress={() => onPressSubmit(email)} />

      <BackButton text={"Back to Login"} onPress={() => onPressBackToLogin()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue", //'#EEEAE2',
  },
  resetHeading: {
    marginTop: "25%",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    marginTop: "5%",
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: "10%",
    textAlign: "center",
    //fontWeight : 'bold',
    color: "black",
  },
});
