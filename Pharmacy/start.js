import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import pharmacyLogo from "../assets/pharmacyLogo.png";
import { AntDesign } from "@expo/vector-icons";

export default function Pharmacy({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SearchNearbyPharmacies");
    }, 3000);
  });

  return (
    <View>
      <View style={styles.container}>
        <Image source={pharmacyLogo} style={styles.logo}></Image>
        <Text style={styles.txt}>
          Order medicines from comfort of your home
        </Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchNearbyPharmacies")}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Next </Text>
          <AntDesign name="arrowright" size={22} color="#349bf1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 200,
  },
  txt: {
    marginTop: "10%",
    color: "#349beb",
  },
  next: {
    marginTop: "75%",
    alignItems: "flex-end",
    marginRight: "12%",
  },
  btn: {
    flexDirection: "row",
  },
  btntxt: {
    color: "#349bf1",
    fontSize: 16,
  },
});
