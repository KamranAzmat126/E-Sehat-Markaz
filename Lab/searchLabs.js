import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import labIcon from "../assets/LAB_Icon.png";
import { Ionicons } from "@expo/vector-icons";

export default function SearchLabs({ navigation }) {
  const [address, setAddress] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Image source={labIcon} style={styles.img} />
        <Text style={styles.txt}>
          Please enter the name of city to find the nearby registered labs
        </Text>
      </View>

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="City"
          name="city"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("FoundLabs", { add: address })}
        >
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "35%",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  img: {
    width: 170,
    height: 170,
  },
  txt: {
    marginVertical: "7%",
  },
  search: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
  input: {
    padding: 8,
    width: "90%",
  },
});
