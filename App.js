import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './global.css'
import { StatusBar } from 'expo-status-bar'
const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-green-300">
    <Text>Open up App.js to start working on your app!</Text>
    <Text className='bourder text-red-600'>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default App

const styles = StyleSheet.create({})