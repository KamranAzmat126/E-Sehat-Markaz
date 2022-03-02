import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminLogin from "./screens/adminLogin";
import adminLoginVerification from "./screens/adminLoginVerification";
import ForgotPasswordScreen from "./screens/forgotPasswordScreen";
import Home from "./screens/home";
import ResetPassword from "./screens/resetPasswordScreen";
import DoctorRequests from "./screens/doctorRequestScreen";
import AmbulanceRequests from "./screens/ambulanceRequestScreen";
import DoctorRequestDetails from "./screens/docRequestDetails";
import AmbulanceRequestDetails from "./screens/ambRequestDetails";
import nav from "./screens/home";
import DrawerNavigator from "./screens/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AdminLogin"
          component={AdminLogin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="adminLoginVerification"
          component={adminLoginVerification}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="forgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="resetPasswordScreen"
          component={ResetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            title: "Dashboard",
            headerStyle: { backgroundColor: "lightblue" },
          }}
        />

        <Stack.Screen
          name="DoctorRequests"
          component={DoctorRequests}
          options={{
            title: "Doctor Requests",
            headerStyle: { backgroundColor: "lightblue" },
          }}
        />

        <Stack.Screen
          name="AmbulanceRequests"
          component={AmbulanceRequests}
          options={{
            title: "Ambulance Requests",
            headerStyle: { backgroundColor: "lightblue" },
          }}
        />

        <Stack.Screen
          name="DoctorRequestDetails"
          component={DoctorRequestDetails}
          options={{
            title: "Doctor Detail",
            headerStyle: { backgroundColor: "#EEEAE2" },
          }}
        />

        <Stack.Screen
          name="AmbulanceRequestDetails"
          component={AmbulanceRequestDetails}
          options={{
            title: "Ambulance Detail",
            headerStyle: { backgroundColor: "#EEEAE2" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
