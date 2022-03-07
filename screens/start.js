import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic from "../assets/blooddonation.png";
import { AntDesign } from "@expo/vector-icons";

export default function Start({ navigation }) {
  setTimeout(() => {
    navigation.navigate("BloodDonors");
  }, 3000);
  return (
    <View>
      <View style={styles.container}>
        <Image source={pic} style={styles.img} />
        <Text style={styles.text}>
          Donating Blood is a Great Act of Kindness
        </Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("BloodDonors")}
        >
          <Text style={styles.nxttxt}>Next</Text>
          <AntDesign name="arrowright" size={22} color="#e10c00" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: "40%",
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    color: "#e10c00",
  },
  img: {
    width: 150,
    height: 250,
  },
  next: {
    alignItems: "flex-end",
    marginRight: 45,
    marginTop: "60%",
  },
  btn: {
    flexDirection: "row",
  },
  nxttxt: {
    color: "#e10c00",
  },
});
