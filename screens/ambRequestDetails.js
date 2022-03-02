import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AmbulanceRequestDetails({ route, navigation }) {
  // const {paramId} = route.params;
  const [data, setData] = useState(route.params.doc);

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/ambreq.jpg")} style={styles.img} />
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{data.name} Ambulance</Text>
        {/* <Text style={styles.cont}>
          <Text style={styles.head}>Category:</Text>{" "}
          <Text style={styles.sub}>{data.category}</Text>
        </Text>
        <Text style={styles.cont}>
          <Text style={styles.head}>Experience:</Text>{" "}
          <Text style={styles.sub}>{data.experience}</Text>
        </Text> */}
        <Text style={styles.head}>Description:</Text>
        <Text style={styles.detail}>{data.description}</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.suc}
          onPress={() =>
            Alert.alert("Confirm", "Are You Sure?", [
              {
                text: "Yes Proceed",
                onPress: () => {
                  Alert.alert("Success", "Request is Approved Successfully");
                  navigation.goBack();
                },
              },
              { text: "Cancel" },
            ])
          }
        >
          <FontAwesome name="check" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.war}
          onPress={() =>
            Alert.alert("Confirm", "Are You Sure?", [
              {
                text: "Yes Proceed",
                onPress: () => {
                  Alert.alert("Success", "Request is Rejected Successfully");
                  navigation.goBack();
                },
              },
              { text: "Cancel" },
            ])
          }
        >
          <FontAwesome name="times" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Decline</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEAE2",
  },
  img: {
    height: 250,
    width: 400,
    alignSelf: "center",
  },
  detailContainer: {
    marginVertical: 15,
    padding: 15,
  },
  name: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 5,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  suc: {
    backgroundColor: "green",
    width: "40%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
  },
  war: {
    backgroundColor: "red",
    width: "40%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
  },
  btnTxt: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
