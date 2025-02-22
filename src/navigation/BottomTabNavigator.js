// import React from "react";
// import { Animated, TouchableOpacity, View } from "react-native";
// import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// // import { HomeScreen, OrdersScreen, CartScreen, OffersScreen, NotificationsScreen } from "../screens"; // Import screens
// import Home from "../screens/home/Home";
// import Favourite from "../screens/favourites/Favourite";
//  import Offers from "../screens/offers/Offers";
// import Notifications from "../screens/notifications/Notifications";
// import Cart from "../screens/cart/Cart";
  
// export default function CurvedBottomTabNavigator() {
// const navigation=useNavigation()

//   const _renderIcon = (routeName, selectedTab) => {
//     let icon = "";

//     switch (routeName) {
//       case "Home":
//         icon = "home-outline";
//         break;
//       case "favourite":
//         icon = "heart-outline";
//         break;
//       case "Offers":
//         icon = "pricetag-outline";
//         break;
//       case "Notifications":
//         icon = "notifications-outline";
//         break;
//     }

//     return (
//       <Ionicons
//         name={icon}
//         size={25}
//         color={routeName === selectedTab ? "#ff4500" : "gray"}
//       />
//     );
//   };

//   return (
//     <CurvedBottomBarExpo.Navigator
//       type="DOWN"
//       style={{ backgroundColor: "white" }}
//       height={55}
//       circleWidth={50}
//       bgColor="white"
//       initialRouteName="Home"
//       borderTopLeftRight
//       renderCircle={({ selectedTab, navigate }) => (
//         <View className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center bottom-6 shadow-md">
//           <TouchableOpacity onPress={() => navigate("Cart")}>
//             <Ionicons name={"cart-outline"} color="gray" size={25} />
//           </TouchableOpacity>
//         </View>
//       )}
//       tabBar={({ routeName, selectedTab, navigate }) => (
//         <TouchableOpacity
//           onPress={() => navigate(routeName)}
//           className="flex-1 items-center justify-center"
//         >
//           {_renderIcon(routeName, selectedTab)}
//         </TouchableOpacity>
//       )}
//     >
//       <CurvedBottomBarExpo.Screen
//         name="Home"
//         position="LEFT"
//         component={Home}
//       />
//       <CurvedBottomBarExpo.Screen
//         name="favourite"
//         position="LEFT"
//         component={Favourite}
//       />
//      <CurvedBottomBarExpo.Screen name="Cart" position="CENTER" component={Cart} />
//       <CurvedBottomBarExpo.Screen
//         name="Offers"
//         position="RIGHT"
//         component={Offers}
//       />
//       <CurvedBottomBarExpo.Screen
//         name="Notifications"
//         position="RIGHT"
//         component={Notifications}
//       />
//     </CurvedBottomBarExpo.Navigator>
//   );
// }






 
import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}
            >
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <Screen2 />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});