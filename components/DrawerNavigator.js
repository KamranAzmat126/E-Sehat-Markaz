import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation})  {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Login" component={AdminLogin} />
                <Drawer.Screen name="Fuck Off" component = {TabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
  }