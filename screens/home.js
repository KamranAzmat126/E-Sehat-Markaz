import { TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminLogin from "./adminLogin";
import { Fontisto } from "@expo/vector-icons";
import { auth } from "../services/firebase";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={logo}
      /> */}

      <View style={styles.btnCont}>
        <TouchableOpacity
          style={styles.doctor}
          onPress={() => navigation.navigate("DoctorRequests")}
        >
          <View style={{ alignItems: "center" }}>
            <Fontisto name="doctor" size={40} color="white" />
            <Text style={styles.doctor_text}>Doctor Requests</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ambulance}
          onPress={() => navigation.navigate("AmbulanceRequests")}
        >
          <View style={{ alignItems: "center" }}>
            <Fontisto name="ambulance" size={40} color="white" />
            <Text style={styles.ambulance_text}>Ambulance Requests</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const onSignOut = ({ navigation }) => {
  auth
    .signOut()
    .then(() => {
      navigation.navigate("AdminLogin");
    })
    .catch((error) => alert("Error Occured! Try Again"));

  return <></>;
};

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Dashboard",
        }}
      />
      <Drawer.Screen
        name="onSignOut"
        component={onSignOut}
        options={{ title: "Log Out", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue", //'#EEEAE2',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    marginTop: "10%",
    marginBottom: "5%",
  },
  btnCont: {
    flexDirection: "column",
    width: "90%",
    // justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  doctor: {
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: "#f24444", //'#f26666',
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 30,
  },
  doctor_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  ambulance: {
    alignItems: "center",
    backgroundColor: "#4bab4e", //'#30a9c7',
    // paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 30,
  },
  ambulance_text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
