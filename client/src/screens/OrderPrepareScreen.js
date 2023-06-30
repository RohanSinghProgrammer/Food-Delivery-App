import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const OrderPrepareScreen = () => {
  const navigation = useNavigation()
  useEffect( () => {
    setTimeout( () => {
      navigation.navigate( 'TrackOrder' )
    }, 3000 );
  }, [] )
  return (
    <View className='flex-1 justify-center items-center'>
      <StatusBar style='dark' />
      <Image className='h-96 w-96' source={require( '../../assets/images/delivery.gif' )} />
    </View>
  )
}

export default OrderPrepareScreen