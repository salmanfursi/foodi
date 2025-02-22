import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation=useNavigation()
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-red-600">Home</Text>
      <TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text className="text-white border border-white p-2 rounded mt-2">
          Open Sidebar
        </Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
