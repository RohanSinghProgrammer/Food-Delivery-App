import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import { featured } from '../../constants'

const HomeScreen = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} >
      <SafeAreaView>
        <StatusBar style='dark' />
        <ScrollView>
          <Header />
          <Categories />
          <TouchableWithoutFeedback>
            <View>
              <Featured featured={featured} />
              <Featured featured={featured} />
              <Featured featured={featured} />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen