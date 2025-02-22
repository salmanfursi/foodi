import { createDrawerNavigator } from "@react-navigation/drawer";
 import Home from "../screens/home/Home";
import SidebarScreen from "../screens/home-sidebar/sidebarScreen";

const Drawer = createDrawerNavigator();

export default function HomeWithDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerStyle: { width: 250 } }}
      drawerContent={(props) => <SidebarScreen {...props} />}
    >
      <Drawer.Screen name="HomeMain" component={Home} />
    </Drawer.Navigator>
  );
}
