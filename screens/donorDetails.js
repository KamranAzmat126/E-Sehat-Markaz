import React, { useState } from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { Avatar } from "react-native-paper";
import kami from "../assets/kami.jpeg";
import { Entypo } from "@expo/vector-icons";

export default function DonorDetails({ route }) {
  const [data, setData] = useState(route.params.donor);

  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.naar}>
        <Avatar.Image source={kami} size={200} />
        <Text style={styles.name}>{data.name}</Text>
      </View>

      <View style={styles.details}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Age: </Text>
          <Text style={styles.values}> {data.age}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Blood Group: </Text>
          <Text style={styles.values}> {data.bloodGroup}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Address: </Text>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <Entypo name="location-pin" size={18} color="black" />
            <Text style={styles.click} onPress={() => location(data.city)}>
              {" "}
              {data.city}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Contact: </Text>
          <View
            style={{ flexDirection: "row", marginTop: "5%", marginLeft: 5 }}
          >
            <Entypo name="old-phone" size={18} color="black" />
            <Text
              style={styles.click}
              onPress={() => {
                Linking.openURL(`tel:${data.contact}`);
              }}
            >
              {" "}
              {data.contact}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    marginHorizontal: 10,
    width: "100%",
  },
  naar: {
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#26241e",
    marginVertical: 10,
  },
  details: {
    borderTopWidth: 0.3,
    borderBottomEndRadius: 10,
    borderBottomRightRadius: 100,
    borderBottomStartRadius: 100,
  },
  keys: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#26241e",
    marginTop: "4%",
  },
  values: {
    fontSize: 14,
    color: "#6e6464",
    marginTop: "5%",
  },
  click: {
    fontSize: 14,
    color: "#6e6464",
    borderBottomWidth: 0.5,
  },
});
