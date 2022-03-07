import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Data from "./pharmaciesDummyData";

export default function FoundNearbyPharmacies({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Registered pharmacies in {route.params.add}
      </Text>
      <FlatList
        data={Data}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PharmacyDetails", { pharm: itemData.item })
            }
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>{itemData.item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "25%",
    width: "90%",
    marginHorizontal: "5%",
  },
  txt: {
    marginLeft: 5,
    marginBottom: 25,
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    padding: 25,
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: 5,
  },
  btnTxt: {
    fontSize: 16,
  },
});
