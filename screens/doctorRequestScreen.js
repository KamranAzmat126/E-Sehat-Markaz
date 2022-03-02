import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
// import Requests from "../components/Requests";
import Data from "../DoctorData";
import docreq from "../assets/docreq.jpg";

export default function DoctorRequests({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={Data}
      renderItem={(itemData) => (
        <View style={styles.btnContainer}>
          {/* {Data.map(el => (  */}
          <TouchableOpacity
            onPress={() =>
              navigation.push("DoctorRequestDetails", { doc: itemData.item })
            }
            style={styles.btn}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column", width: "70%" }}>
                <Text style={styles.head}>Dr. {itemData.item.name}</Text>
                <Text style={styles.sub}>MBBS</Text>
                <Text style={styles.cat}>{itemData.item.category}</Text>
              </View>

              <View style={{ justifyContent: "flex-end" }}>
                <Image
                  source={docreq}
                  resizeMode="cover"
                  style={{ height: 100, width: 100 }}
                />
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
    backgroundColor: "lightblue", //'#EEEAE2',
    padding: 15,
  },
  btn: {
    backgroundColor: "#e6ebf2", //'#4e8df2',
    borderRadius: 20,
    padding: 15,
    marginVertical: 15,
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
  sub: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  cat: {
    fontSize: 16,
    fontWeight: "900",
    color: "gray",
    marginTop: 5,
  },
});
