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
import pharmacyLogo from "../assets/pharmacyLogo.png";
import { Ionicons } from "@expo/vector-icons";

export default function SearchNearbyPharmacies({ navigation }) {
  const [address, setAddress] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Image source={pharmacyLogo} style={styles.img} />
        <Text style={styles.txt}>
          Please enter the name of city to find the nearby registered pharmacies
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
          onPress={() =>
            navigation.navigate("FoundNearbyPharmacies", { add: address })
          }
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
    width: 200,
    height: 130,
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
