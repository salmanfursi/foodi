import React from "react";
import { Alert, Animated, TouchableOpacity, View } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { HomeScreen, OrdersScreen, CartScreen, OffersScreen, NotificationsScreen } from "../screens"; // Import screens
import Home from "../screens/home/Home";
import Favourite from "../screens/favourites/Favourite";
import cart from "../screens/cart/Cart";
import Offers from "../screens/offers/Offers";
import Notifications from "../screens/notifications/Notifications";
import Cart from "../screens/cart/Cart";
import HomeWithDrawer from "./HomeWithDrawer";

const Drawer = createDrawerNavigator();

// const HomeWithDrawer = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: { backgroundColor: "#fff", width: 250 },
//       }}
//       drawerContent={(props) => <SidebarScreen {...props} />}
//     >
//       <Drawer.Screen name="HomeMain" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

export default function CurvedBottomTabNavigator() {
const navigation=useNavigation()

  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "HomeWithDrawer":
        icon = "home-outline";
        break;
      case "favourite":
        icon = "heart-outline";
        break;
      case "Offers":
        icon = "pricetag-outline";
        break;
      case "Notifications":
        icon = "notifications-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "#ff4500" : "gray"}
      />
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={{ backgroundColor: "white" }}
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <View className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center bottom-6 shadow-md">
          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <Ionicons name={"cart-outline"} color="gray" size={25} />
          </TouchableOpacity>
        </View>
      )}
      tabBar={({ routeName, selectedTab, navigate }) => (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          className="flex-1 items-center justify-center"
        >
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      )}
    >
      <CurvedBottomBarExpo.Screen
        name="HomeWithDrawer"
        position="LEFT"
        component={HomeWithDrawer}
      />
      {/* <CurvedBottomBarExpo.Screen
        name="Home"
        position="LEFT"
        component={Home}
      /> */}
      <CurvedBottomBarExpo.Screen
        name="favourite"
        position="LEFT"
        component={Favourite}
      />
      <CurvedBottomBarExpo.Screen
        name="cart"
        // position="LEFT"
        component={Cart}
      />
     
      <CurvedBottomBarExpo.Screen
        name="Offers"
        position="RIGHT"
        component={Offers}
      />
      <CurvedBottomBarExpo.Screen
        name="Notifications"
        position="RIGHT"
        component={Notifications}
      />
    </CurvedBottomBarExpo.Navigator>
  );
}
