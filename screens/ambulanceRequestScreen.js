import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Data from "../AmulaceData";
import ambreq from "../assets/ambreq.jpg";

export default function AmbulanceRequests({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={Data}
      renderItem={(itemData) => (
        <View style={styles.btnContainer}>
          {/* {Data.map(el => (  */}
          <TouchableOpacity
            onPress={() =>
              navigation.push("AmbulanceRequestDetails", { doc: itemData.item })
            }
            style={styles.btn}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column", width: "60%" }}>
                <Text style={styles.head}>{itemData.item.name} Ambulance</Text>
                <Text style={styles.sub}> {itemData.item.city} </Text>
              </View>
              <View>
                <Image source={ambreq} style={{ width: 120, height: 100 }} />
              </View>
            </View>
          </TouchableOpacity>
          {/* )} */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue", //"#EEEAE2",
    padding: 15,
  },
  btn: {
    backgroundColor: "#e6ebf2", //"#4e8df2",
    borderRadius: 30,
    padding: 15,
    marginVertical: 15,
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
  sub: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
});
