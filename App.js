import React from "react";

//For Blood Donation Screen
import Start from "./screens/start";
import BloodDonors from "./screens/bloodDonors";
import DonorDetails from "./screens/donorDetails";

//For Pharmacy Screens
// import Pharmacy from "./Pharmacy/start";
// import SearchNearbyPharmacies from "./Pharmacy/searchNearbyPharmacies";
// import FoundNearbyPharmacies from "./Pharmacy/foundNearbyPharmacies";
// import PharmacyDetails from "./Pharmacy/pharmacyDetails";

//For Lab Screens
// import Lab from "./Lab/start";
// import SearchLabs from "./Lab/searchLabs";
// import FoundLabs from "./Lab/foundLabs";
// import LabDetails from "./Lab/labDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<---------------------------------------Labs------------------------------------------->

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Lab"
    //       component={Lab}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="SearchLabs"
    //       component={SearchLabs}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="FoundLabs"
    //       component={FoundLabs}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="LabDetails"
    //       component={LabDetails}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //<-------------------------------------Pharmacy-------------------------------------------------->

    // For Pharmacy Screens
    //  <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Pharmacy"
    //     component={Pharmacy}
    //     options={{ headerShown: false }}
    //   />

    //   <Stack.Screen
    //     name="SearchNearbyPharmacies"
    //     component={SearchNearbyPharmacies}
    //     options={{ headerShown: false }}
    //   />

    //   <Stack.Screen
    //     name="FoundNearbyPharmacies"
    //     component={FoundNearbyPharmacies}
    //     options={{ headerShown: false }}
    //   />

    //   <Stack.Screen
    //     name="PharmacyDetails"
    //     component={PharmacyDetails}
    //     options={{ headerShown: false }}
    //   />
    // </Stack.Navigator>
    // </NavigationContainer>

    //<----------------------------------------Blood Donation--------------------------------------->

    //For Blood Donation Screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="BloodDonors"
          component={BloodDonors}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DonorDetails"
          component={DonorDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
