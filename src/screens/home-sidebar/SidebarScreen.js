import { View, Text } from "react-native";
 
 
export default function SidebarScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-lg font-bold">Sidebar Menu</Text>
      <Text className="mt-2">- Profile</Text>
      <Text className="mt-2">- Orders</Text>
      <Text className="mt-2">- Settings</Text>
    </View>
  );
}
