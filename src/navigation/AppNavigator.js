import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CurvedBottomTabNavigator from "./BottomTabNavigator";
import SidebarScreen from "../screens/home-sidebar/SidebarScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#fff", width: 250 },
      }}
      drawerContent={(props) => <SidebarScreen {...props} />}
    >
      {/* ✅ Wrap Bottom Tab Inside Drawer */}
      <Drawer.Screen
        name="Main"
        component={CurvedBottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
