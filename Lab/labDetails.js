import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import labIcon from "../assets/LAB_Icon.png";
import { Entypo } from "@expo/vector-icons";

export default function LabDetails({ navigation, route }) {
  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtName}>{route.params.pharm.name}</Text>

      <View style={{ alignItems: "center" }}>
        <Image source={labIcon} style={styles.img} />
      </View>

      <Text style={styles.addHead}>Address: </Text>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="location-pin" size={18} color="black" />
        <Text onPress={() => address(route.params.pharm.address)}>
          {" "}
          {route.params.pharm.address}
        </Text>
      </View>

      <Text style={styles.txtCntc}>Contact: </Text>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Entypo name="old-phone" size={18} color="black" />
        <Text
          style={styles.contactNum}
          onPress={() => {
            Linking.openURL(`tel:${route.params.pharm.contact}`);
          }}
        >
          {route.params.pharm.contact}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    marginHorizontal: "5%",
  },
  txtName: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 10,
    width: 250,
    height: 250,
  },
  addHead: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  txtCntc: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNum: {
    marginLeft: 10,
    borderBottomWidth: 0.5,
    color: "black",
  },
});
