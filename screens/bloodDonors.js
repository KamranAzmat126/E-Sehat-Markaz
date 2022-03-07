import React, { useState } from "react";
import blooddonation from "../assets/blooddonation.png";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Avatar } from "react-native-paper";
import Data from "../DonorsData";
import kami from "../assets/kami.jpeg";
import { NavigationContainer } from "@react-navigation/native";

export default function BloodDonors({ navigation }) {
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("APositive");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={blooddonation} style={styles.img} />

        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <TextInput
            placeholder="City"
            value={city}
            name="city"
            onChangeText={setCity}
            style={styles.input}
          ></TextInput>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={bloodGroup}
              //style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
            >
              <Picker.Item label="A+" value="APositive" />
              <Picker.Item label="A-" value="ANegative" />
              <Picker.Item label="B+" value="BPositive" />
              <Picker.Item label="B-" value="BNegative" />
              <Picker.Item label="AB+" value="ABPositive" />
              <Picker.Item label="AB-" value="ABNegative" />
              <Picker.Item label="O+" value="OPositive" />
              <Picker.Item label="O-" value="ONegative" />
            </Picker>
          </View>
        </View>
      </View>

      <FlatList
        style={{ flex: 0 }}
        data={Data}
        extraData={Data}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DonorDetails", { donor: itemData.item })
            }
          >
            <View style={styles.list}>
              <Avatar.Image source={kami} style={styles.avatar} />
              <View style={styles.details}>
                <Text style={styles.name}>{itemData.item.name}</Text>
                <Text style={styles.city}>
                  Blood Group: {itemData.item.bloodGroup}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    alignItems: "center",
    marginTop: "12%",
    width: 70,
    height: 100,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    width: "69%",
    alignItems: "flex-start",
    padding: 12,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 2,
    width: "26%",
  },
  list: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 7,
    backgroundColor: "lightgray",
  },
  details: {
    margin: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#26241e",
  },
  city: {
    fontSize: 14,
    color: "#26241e",
  },
  avatar: {
    margin: 10,
  },
});
