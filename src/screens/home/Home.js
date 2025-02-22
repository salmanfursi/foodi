import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-red-600">Home</Text>
      <TouchableOpacity>
        <Text className="text-white border border-white p-2 rounded mt-2">
          sidebar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
